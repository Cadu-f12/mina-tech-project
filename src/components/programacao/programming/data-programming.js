import eventImage from "../../../assets/event-image-example.png";
import eventPreview1 from "../../../assets/event-preview-1.png";
import eventPreview2 from "../../../assets/event-preview-2.png";
import eventPreview3 from "../../../assets/event-preview-3.png";

export const currentEventData = {
    image: eventImage,
    currentDay: "Quarta-feira",
    date: "10 de Abril de 2024",
    properties: {
        tema: "Rodas de conversa",
        alimentacao: "Coffe Break",
        local: "Sebrae HUB - SC 401",
        horario: "13:45 às 17:45",
    },
};

export const allEventsData = [
    {
        id: 1,
        date: "01/05",
        description: "Rodas de conversa, Coffe Break, Sebrae HUB - SC 401, 13:45 às 17:45",
        image: eventPreview1,
    },
    {
        id: 2,
        date: "15/05",
        description: "Workshop de habilidades técnicas, Almoço, Meetup - SC 402, 10:00 às 16:00",
        image: eventPreview2,
    },
    {
        id: 3,
        date: "28/05",
        description: "Palestras, Networking, Fórum - SC 403, 09:00 às 18:00",
        image: eventPreview3,
    },
];
