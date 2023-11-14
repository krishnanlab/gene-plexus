import { FaArrowRight, FaBullhorn, FaFlask, FaShapes } from "react-icons/fa";
import Ago from "@/components/Ago";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Link from "@/components/Link";
import Meta from "@/components/Meta";
import Section from "@/components/Section";
import Textbox from "@/components/Textbox";

const Testbed = () => {
  return (
    <>
      <Meta title="Testbed" />

      <Section>
        <Heading level={1} icon={<FaFlask />}>
          Testbed
        </Heading>
      </Section>

      <Section fill={true}>
        <Heading level={2}>Heading 2</Heading>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis
          sed odio morbi quis commodo odio aenean sed. Urna cursus eget nunc
          scelerisque viverra mauris in aliquam. Elementum integer enim neque
          volutpat ac tincidunt vitae semper quis. Non diam phasellus vestibulum
          lorem sed risus. Amet luctus venenatis lectus magna.
        </p>
      </Section>

      <Section>
        <p>
          Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.
          Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet.
          Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at
          augue. Blandit cursus risus at ultrices mi tempus. Odio aenean sed
          adipiscing diam donec.
        </p>

        <p>
          Ut pharetra sit amet aliquam. Amet cursus sit amet dictum sit amet
          justo donec. Porttitor massa id neque aliquam vestibulum morbi blandit
          cursus. Nunc eget lorem dolor sed viverra ipsum nunc. Amet est
          placerat in egestas erat. Suscipit tellus mauris a diam maecenas sed.
          Egestas fringilla phasellus faucibus scelerisque eleifend donec.
          Mauris pharetra et ultrices neque ornare. Phasellus egestas tellus
          rutrum tellus pellentesque eu tincidunt tortor aliquam.
        </p>

        <Heading level={3}>Heading 3</Heading>

        <ul>
          <li>Ac tincidunt vitae semper quis lectus nulla at volutpat diam.</li>
          <li>Morbi quis commodo odio aenean sed adipiscing diam.</li>
          <li>Vitae semper quis lectus nulla at volutpat diam ut venenatis.</li>
        </ul>

        <Heading level={4}>Heading 4</Heading>

        <p>
          <code>Vitae semper quis</code> lectus nulla at volutpat diam ut
          venenatis.
        </p>

        <pre>
          <code>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
            <br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </code>
        </pre>
      </Section>

      <Section>
        <Heading level={2} icon={<FaShapes />}>
          Components
        </Heading>

        <div className="flex">
          <Button to="/about" text="About" tooltip={<>Hello World</>} />
          <Button
            to="/about"
            text="Learn More"
            icon={<FaArrowRight />}
            design="accent"
            tooltip={
              <>
                <b>Hello</b> <i>World</i>
              </>
            }
          />
          <Button
            to="/about"
            icon={<FaBullhorn />}
            design="critical"
            tooltip={
              <Link to="https://medschool.cuanschutz.edu/dbmi">Test Link</Link>
            }
          />
          <Button
            onClick={() => window.alert("Hello World")}
            text="About"
            tooltip={<>Hello World</>}
          />
          <Button
            onClick={() => window.alert("Hello World")}
            text="Learn More"
            icon={<FaArrowRight />}
            design="accent"
            tooltip={<>Hello World</>}
          />
          <Button
            onClick={() => window.alert("Hello World")}
            icon={<FaBullhorn />}
            design="critical"
            tooltip={<>Hello World</>}
          />
        </div>

        <div className="grid gap-lg">
          <Textbox placeholder="Search" />
          <Textbox placeholder="Search" multi={true} />
          <Textbox label="Textbox" placeholder="Search" tooltip="Help text" />
          <Textbox
            label="Textbox"
            multi={true}
            placeholder="Search"
            tooltip="Help text"
          />
        </div>

        <div className="flex">
          <Ago date="" />
          <Ago date="Nov 12 2023" />
          <Ago date="Jun 1 2020" />
        </div>
      </Section>
    </>
  );
};

export default Testbed;
