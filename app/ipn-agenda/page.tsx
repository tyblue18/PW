import IPNAgenda from "@/components/IPNAgenda";
import Navigation from "@/components/Navigation";

export default function IPNAgendaPage() {
  return (
    <main className="min-h-screen bg-black relative">
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 py-24 pt-32">
        <IPNAgenda eventId="686ff74f3e007390d9969481" />
      </div>
    </main>
  );
}



