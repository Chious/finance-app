import Form from "@/components/ui/form/form";
import BackgroundImage from "@/images/illustration-authentication.svg";

export default function Home() {
  return (
    <main className="bg-yellow/20 flex items-center justify-center w-full h-full p-5 gap-5 relative -z-20">
      <section className="w-96 border h-full relative p-4 flex justify-between flex-col rounded-lg">
        <BackgroundImage className="absolute h-full w-full object-cover -z-10 left-0 top-0 rounded-lg" />
        <h1 className="text-white">Finance</h1>
        <div className="flex flex-col gap-3">
          <h2 className="text-white">
            Keep track of your money and save for your future
          </h2>
          <h4 className="text-white">
            Personal finance app puts you in control of your spending. Track
            transactions, set budgets, and add to savings pots easily.
          </h4>
        </div>
      </section>
      <section className="flex flex-1 items-center justify-center">
        <Form />
      </section>
    </main>
  );
}
