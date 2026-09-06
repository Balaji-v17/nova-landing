import Card from '../ui/Card';

export default function Solutions() {
  const useCases = [
    {
      title: "For Engineering Teams",
      description: "Automate sprint planning and connect Jira, GitHub, and Slack to let developers focus on code, not status updates."
    },
    {
      title: "For Marketing",
      description: "Sync campaign assets across Figma and Notion while NOVA drafts your weekly cross-functional reports."
    },
    {
      title: "For Founders",
      description: "Keep a bird's-eye view on team velocity and resource allocation without scheduling endless sync meetings."
    }
  ];

  return (
    <section className="w-full py-24 bg-white" aria-label="Use Cases">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:w-[60%]">
          <h2 className="text-4xl font-display font-bold text-ink mb-4">Built for your workflow.</h2>
          <p className="text-lg text-slate">Whether you are pushing code, running campaigns, or scaling a company, NOVA adapts to your team's rhythm.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <Card key={index} variant="solid" className="flex flex-col h-full">
              <h3 className="text-xl font-display font-bold text-ink mb-3">{useCase.title}</h3>
              <p className="text-slate leading-relaxed">{useCase.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}