import Heading from "@/components/Heading";
import Meta from "@/components/Meta";
import Section from "@/components/Section";

const NewAnalysis = () => {
  return (
    <>
      <Meta title="New Analysis" />

      <Section>
        <Heading level={1}>New Analysis</Heading>

        <ul>
          <li>Ac tincidunt vitae semper quis lectus nulla at volutpat diam.</li>
          <li>Morbi quis commodo odio aenean sed adipiscing diam.</li>
          <li>
            <code>Vitae semper quis</code> lectus nulla at volutpat diam ut
            venenatis.
          </li>
        </ul>
      </Section>
    </>
  );
};

export default NewAnalysis;
