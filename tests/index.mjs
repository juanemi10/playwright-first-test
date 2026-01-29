import { SQSClient, SendMessageCommand } from "@aws-sdk/client-sqs";

const sqsClient = new SQSClient({});

export const handler = async (event) => {
    console.log("Evento recibido:", JSON.stringify(event, null, 2));
    
    try {
        const body = event.body ? JSON.parse(event.body) : {};
        const { from_account, to_account, amount } = body;

        // --- VALIDACIONES DE NEGOCIO (QA Focus) ---
        const errors = [];
        if (!from_account) errors.push("from_account es requerido");
        if (!to_account) errors.push("to_account es requerido");
        if (typeof amount !== 'number' || amount <= 0) {
            errors.push("amount debe ser un número mayor a cero");
        }
        if (from_account === to_account) {
            errors.push("from_account y to_account no pueden ser iguales");
        }

        if (errors.length > 0) {
            return {
                statusCode: 400,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: "error", errors })
            };
        }

        // 2. Enviar a SQS usando SDK v3
        const command = new SendMessageCommand({
            QueueUrl: process.env.SQS_URL,
            MessageBody: JSON.stringify({
                from_account,
                to_account,
                amount,
                request_timestamp: new Date().toISOString()
            })
        });

        await sqsClient.send(command);

        return {
            statusCode: 202,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: "accepted", message: "Solicitud recibida" })
        };

    } catch (error) {
        console.error("Error técnico:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Error interno" })
        };
    }
};