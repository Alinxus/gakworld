import { FC } from "react";

interface Client {
  id: number;
  name: string;
  location: string;
  description: string;
}

const clients: Client[] = [
  { id: 1, name: "Lagos State University", location: "Ikota, Lagos", description: "Daily Janitorial Cleaning, Services, and fumigation & pest control general Services" },
  { id: 2, name: "A.A Oil Ltd", location: "Abuja/Lagos", description: "General Cleaning, Lamination of tiles, ceramic, fumigation and General Maintenance" },
  { id: 3, name: "AJH Towers", location: "Victoria Island", description: "General Cleaning of 6-Storey building, fumigation and pest control services" },
  { id: 4, name: "Elim Motors", location: "Lekki Roundabout, Lagos/Abuja", description: "Daily Janitorial Cleaning Services and fumigation & pest Control" },
  { id: 5, name: "Airport Hotel", location: "Ikeja, Lagos", description: "General Cleaning & polishing Quarterly maintenance of Oranmiyan Hall" },
  { id: 6, name: "Food Emporium International Limited", location: "G.R.A Ikeja, Lagos", description: "Daily Cleaning Services, Fumigation & pest Control & refuse disposal" },
  { id: 7, name: "T.M. Lewin Nigeria", location: "Ikoyi, Lagos", description: "General Cleaning & Maintenance" },
  { id: 8, name: "City View Hotel", location: "Oregun, Lagos", description: "General Cleaning" },
  { id: 9, name: "NEPA Ijora District Office", location: "Lagos", description: "Cleaning Services & General fumigation" },
];

export const PastClientsSection: FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Our Past Clients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client) => (
            <div
              key={client.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{client.name}</h3>
              <p className="text-gray-500 italic mb-2">{client.location}</p>
              <p className="text-gray-600">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
