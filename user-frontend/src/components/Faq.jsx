import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <div className="w-full border-b border-secondary bg-black/10 py-16">
      <h1 className="pb-8 text-center text-2xl underline">FAQs</h1>
      <main className="mx-auto rounded-md p-4 py-6 md:max-w-[900px] xl:max-w-[1500px]">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-[1.2rem] hover:text-[1.3rem] hover:text-primary xl:text-[1.4rem] xl:hover:text-[1.5rem]">
              How does CodeWin empower developers?
            </AccordionTrigger>
            <AccordionContent>
              CodeWin provides a platform where developers can showcase their
              coding skills, solve real-world problems, and earn rewards with possible internship opportunities.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-[1.2rem] hover:text-[1.3rem] hover:text-primary xl:text-[1.4rem] xl:hover:text-[1.5rem]">
              What are Challenges?
            </AccordionTrigger>
            <AccordionContent>
              Challenges can be anything depending upon the company
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-[1.2rem] hover:text-[1.3rem] hover:text-primary xl:text-[1.4rem] xl:hover:text-[1.5rem]">
              Are there any fees to participate in challenges?
            </AccordionTrigger>
            <AccordionContent>
              No. there is no participation fee as of now
            </AccordionContent>
          </AccordionItem>
          {/* <AccordionItem value="item-5">
            <AccordionTrigger className="text-[1.2rem] hover:text-[1.3rem] hover:text-primary xl:text-[1.4rem] xl:hover:text-[1.5rem]">
              Can organizations use CodeWin for internal innovation?
            </AccordionTrigger>
            <AccordionContent>
              Yes, companies and educational institutions can use CodeWin to
              run
              internal competitions and challenges to foster innovation and
              team-building among their members. PS: will be rolling out this
              feature in future updates !
            </AccordionContent>
          </AccordionItem> */}
        </Accordion>
      </main>
    </div>
  );
}
