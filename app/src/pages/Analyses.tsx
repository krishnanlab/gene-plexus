import { FaList } from "react-icons/fa";
import Heading from "@/components/Heading";
import Meta from "@/components/Meta";
import Section from "@/components/Section";

const Analyses = () => {
  return (
    <>
      <Meta title="Analyses" />

      <Section>
        <Heading level={1} icon={<FaList />}>
          Analyses
        </Heading>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis
          sed odio morbi quis commodo odio aenean sed. Urna cursus eget nunc
          scelerisque viverra mauris in aliquam. Elementum integer enim neque
          volutpat ac tincidunt vitae semper quis. Non diam phasellus vestibulum
          lorem sed risus. Amet luctus venenatis lectus magna. Vestibulum mattis
          ullamcorper velit sed ullamcorper morbi tincidunt. Turpis nunc eget
          lorem dolor sed viverra ipsum nunc aliquet. Ullamcorper dignissim cras
          tincidunt lobortis feugiat vivamus at augue. Blandit cursus risus at
          ultrices mi tempus. Odio aenean sed adipiscing diam donec. Ut pharetra
          sit amet aliquam. Amet cursus sit amet dictum sit amet justo donec.
          Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Nunc
          eget lorem dolor sed viverra ipsum nunc. Amet est placerat in egestas
          erat. Suscipit tellus mauris a diam maecenas sed. Egestas fringilla
          phasellus faucibus scelerisque eleifend donec. Mauris pharetra et
          ultrices neque ornare. Phasellus egestas tellus rutrum tellus
          pellentesque eu tincidunt tortor aliquam.
        </p>
      </Section>
    </>
  );
};

export default Analyses;
