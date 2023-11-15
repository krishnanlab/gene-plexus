import {
  FaArrowRight,
  FaBullhorn,
  FaFlaskVial,
  FaFont,
  FaRegCircleDot,
  FaRegHourglass,
} from "react-icons/fa6";
import Ago from "@/components/Ago";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Link from "@/components/Link";
import Meta from "@/components/Meta";
import Section from "@/components/Section";
import Tabs, { Tab } from "@/components/Tabs";
import Textbox from "@/components/Textbox";
import { formatDate, formatNumber } from "@/util/string";

/** test and example usage of formatting, elements, components, etc. */
const Testbed = () => {
  return (
    <>
      <Meta title="Testbed" />

      <Section>
        <Heading level={1} icon={<FaFlaskVial />} anchor="">
          Testbed
        </Heading>
      </Section>

      <Section>
        <Heading level={2} icon="B">
          Basic Formatting
        </Heading>

        <Heading level={3}>Heading 3</Heading>

        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Facilisis sed odio
          morbi quis commodo odio aenean sed. Urna cursus eget nunc scelerisque
          viverra mauris in aliquam. Elementum integer enim neque volutpat ac
          tincidunt vitae semper quis. Non diam phasellus vestibulum lorem sed
          risus. Amet luctus venenatis lectus magna.
        </p>

        <p>
          Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.
          Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet.
          Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at
          augue. Blandit cursus risus at ultrices mi tempus. Odio aenean sed
          adipiscing diam donec.
        </p>

        <Heading level={4}>Heading 4</Heading>

        <p>Only use one heading 1 per page.</p>

        <p>Don't skip heading levels.</p>

        <p>Don't use heading levels below 4.</p>

        <p>
          Always format values with util functions as appropriate, like{" "}
          {formatNumber(123456)} and {formatNumber(1234567, true)} and{" "}
          {formatDate(new Date())}.
        </p>
      </Section>

      <Section>
        <p className="narrow center secondary bold">
          Key sentence at start of section.
        </p>

        <hr />

        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>
            <ol>
              <li>Nested list item 3a</li>
              <li>Nested list item 3b</li>
              <li>Nested list item 3c</li>
            </ol>
          </li>
        </ul>

        <blockquote>
          It was the best of times, it was the worst of times, it was the age of
          wisdom, it was the age of foolishness, it was the epoch of belief, it
          was the epoch of incredulity, it was the season of light, it was the
          season of darkness, it was the spring of hope, it was the winter of
          despair.
        </blockquote>

        <hr />

        <p>
          Some <code>inline code</code>.
        </p>

        <pre>
          <code>
            const popup = document.querySelector("#popup");
            <br />
            popup.style.width = "100%";
            <br />
            popup.innerText = "Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.";
          </code>
        </pre>
      </Section>

      <Section>
        <Heading level={2} icon="C">
          Components
        </Heading>

        <Tabs syncWithUrl="component">
          <Tab
            name="Buttons"
            icon={<FaRegCircleDot />}
            tooltip="Lorem ipsum"
            className="flex-row gap-sm"
          >
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
                <Link to="https://medschool.cuanschutz.edu/dbmi">
                  Test Link
                </Link>
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
          </Tab>

          <Tab
            name="Textbox"
            icon={<FaFont />}
            tooltip="Lorem ipsum"
            className="grid"
          >
            <Textbox placeholder="Search" />
            <Textbox placeholder="Search" multi={true} />
            <Textbox label="Textbox" placeholder="Search" tooltip="Help text" />
            <Textbox
              label="Textbox"
              multi={true}
              placeholder="Search"
              tooltip="Help text"
            />
          </Tab>

          <Tab
            name="Ago"
            icon={<FaRegHourglass />}
            tooltip="Lorem ipsum"
            className="flex-row gap-sm"
          >
            <Ago date="" />
            <Ago date="Nov 12 2023" />
            <Ago date="Jun 1 2020" />
          </Tab>
        </Tabs>
      </Section>

      <Section fill={true}>
        <div className="placeholder" />
      </Section>

      <Section full={true}>
        <div className="placeholder" />
      </Section>
    </>
  );
};

export default Testbed;
