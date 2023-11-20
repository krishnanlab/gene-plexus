import {
  FaArrowRight,
  FaArrowsUpDown,
  FaBars,
  FaBeerMugEmpty,
  FaCat,
  FaChampagneGlasses,
  FaCircleInfo,
  FaClipboardList,
  FaFlaskVial,
  FaFont,
  FaHashtag,
  FaMagnifyingGlass,
  FaPalette,
  FaRegCircleDot,
  FaRegFolder,
  FaRegHourglass,
  FaRegSquareCheck,
  FaSliders,
  FaStop,
} from "react-icons/fa6";
import { sample } from "lodash";
import CustomIcon from "@/assets/custom-icon.svg?react";
import Ago from "@/components/Ago";
import Alert from "@/components/Alert";
import Button from "@/components/Button";
import CheckBox from "@/components/CheckBox";
import Collapsible from "@/components/Collapsible";
import Form from "@/components/Form";
import Heading from "@/components/Heading";
import Link from "@/components/Link";
import Meta from "@/components/Meta";
import NumberBox from "@/components/NumberBox";
import Radios from "@/components/Radios";
import Section from "@/components/Section";
import Slider from "@/components/Slider";
import Tabs, { Tab } from "@/components/Tabs";
import TextBox from "@/components/TextBox";
import Tile from "@/components/Tile";
import { toast } from "@/components/Toast";
import { formatDate, formatNumber } from "@/util/string";

/** test and example usage of formatting, elements, components, etc. */
const Testbed = () => {
  return (
    <>
      <Meta title="Testbed" />

      <Section>
        <Heading level={1} icon={<CustomIcon />}>
          Testbed
        </Heading>
      </Section>

      <Section>
        <Heading level={2} icon="B">
          Basic Formatting
        </Heading>

        <Heading level={3} icon={<FaFlaskVial />}>
          Heading 3
        </Heading>

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

        <p className="center">
          <Link to="/">Internal Link</Link>
          <br />
          <Link to="https://medschool.cuanschutz.edu/dbmi">External Link</Link>
        </p>

        <div className="mini-table">
          <span>Prop 1</span>
          <span>123</span>
          <span>Prop 2</span>
          <span>abc</span>
          <span>Prop 3</span>
          <span>xyz</span>
        </div>

        {/* always format values with util functions as appropriate */}
        <p className="center">
          {formatNumber(123456)}
          <br />
          {formatNumber(1234567, true)}
          <br />
          {formatDate(new Date())}
        </p>

        <p className="narrow center primary bold">
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
      </Section>

      {/* button */}
      <Section>
        <Heading level={3} icon={<FaStop />}>
          Button
        </Heading>
        <div className="flex-row gap-sm">
          <Button
            to="/about"
            text="About"
            icon={<FaArrowRight />}
            tooltip={<>Hello World</>}
          />
          <Button
            to="/about"
            text="Learn More"
            design="accent"
            tooltip={
              <>
                <b>Hello</b> <i>World</i>
              </>
            }
          />
          <Button
            to="/about"
            icon={<CustomIcon />}
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
            icon={<CustomIcon />}
            design="critical"
            tooltip={<>Hello World</>}
          />
        </div>
      </Section>

      {/* textbox */}
      <Section>
        <Heading level={3} icon={<FaFont />}>
          Text Box
        </Heading>
        <div className="grid">
          <TextBox
            placeholder="Search"
            tooltip="Help text"
            required={true}
            icon="clear"
            onChange={console.info}
          />
          <TextBox
            placeholder="Search"
            multi={true}
            tooltip="Help text"
            icon={<FaMagnifyingGlass />}
          />
          <TextBox label="TextBox" placeholder="Search" tooltip="Help text" />
          <TextBox
            label="TextBox"
            multi={true}
            placeholder="Search"
            tooltip="Help text"
            required={true}
          />
        </div>
      </Section>

      {/* checkbox */}
      <Section>
        <Heading level={3} icon={<FaRegSquareCheck />}>
          Check Box
        </Heading>
        <div className="flex-col gap-md">
          <CheckBox
            label="Accept terms and conditions"
            name="accept"
            onChange={console.info}
          />
        </div>
      </Section>

      {/* slider */}
      <Section>
        <Heading level={3} icon={<FaSliders />}>
          Slider
        </Heading>
        <div className="flex-col gap-md">
          <Slider
            label="Single"
            tooltip="Help text"
            min={0}
            max={100}
            step={1}
            onChange={console.info}
          />
          <Slider
            label="Range"
            multi={true}
            layout="horizontal"
            tooltip="Help text"
            min={0}
            max={10000}
            step={1}
            onChange={console.info}
          />
        </div>
      </Section>

      {/* number box */}
      <Section>
        <Heading level={3} icon={<FaHashtag />}>
          Number Box
        </Heading>
        <div className="flex-col gap-md">
          <NumberBox
            tooltip="Help text"
            min={0}
            max={100}
            step={1}
            onChange={console.info}
          />
          <NumberBox
            label="Range"
            layout="horizontal"
            tooltip="Help text"
            min={-10000}
            max={10000}
            step={100}
            onChange={console.info}
          />
        </div>
      </Section>

      {/* radios */}
      <Section>
        <Heading level={3} icon={<FaRegCircleDot />}>
          Radios
        </Heading>
        <div className="flex-row">
          <Radios
            options={[
              { id: "first", primary: "Primary lorem ipsum" },
              {
                id: "second",
                primary: "Primary lorem ipsum",
                secondary: "Secondary lorem ipsum",
              },
              {
                id: "third",
                primary: "Primar lorem ipsumy",
                icon: <FaCat />,
              },
            ]}
            onChange={console.info}
          />
        </div>
      </Section>

      {/* ago */}
      <Section>
        <Heading level={3} icon={<FaRegHourglass />}>
          Ago
        </Heading>
        <div className="flex-row gap-sm">
          <Ago date="" />
          <Ago date="Nov 12 2023" />
          <Ago date="Jun 1 2020" />
        </div>
      </Section>

      {/* alert */}
      <Section>
        <Heading level={3} icon={<FaCircleInfo />}>
          Alert
        </Heading>
        <div className="flex-col gap-md">
          <Alert>
            Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Alert>
          <Alert type="loading">
            Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Alert>
          <Alert type="success">
            Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Alert>
          <Alert type="warning">
            Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Alert>
          <Alert type="error">
            Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Alert>
        </div>
      </Section>

      {/* tabs */}
      <Section>
        <Heading level={3} icon={<FaRegFolder />}>
          Tabs
        </Heading>
        <Tabs syncWithUrl="tab">
          <Tab text="Animals" icon={<FaCat />} tooltip="Help text">
            <ul>
              <li>Cat</li>
              <li>Dog</li>
              <li>Bird</li>
            </ul>
          </Tab>
          <Tab
            text="Drinks"
            icon={<FaBeerMugEmpty />}
            tooltip={
              <>
                <b>Help</b> text
              </>
            }
          >
            <ul>
              <li>Soda</li>
              <li>Beer</li>
              <li>Water</li>
            </ul>
          </Tab>
          <Tab text="Colors" icon={<FaPalette />}>
            <ul>
              <li>Red</li>
              <li>Purple</li>
              <li>Blue</li>
            </ul>
          </Tab>
        </Tabs>
      </Section>

      {/* toast */}
      <Section>
        <Heading level={3} icon={<FaChampagneGlasses />}>
          Toast
        </Heading>
        <div className="flex-row gap-sm">
          <Button
            text="Unique Toast"
            design="accent"
            onClick={() =>
              toast(
                sample([
                  "Apple",
                  "Banana",
                  "Cantaloupe",
                  "Durian",
                  "Elderberry",
                ]),
              )
            }
          />
          <Button
            text="Overwriting Toast"
            design="accent"
            onClick={() =>
              toast(
                `ABC`,
                sample(["info", "loading", "success", "warning", "error"]),
                "abc",
              )
            }
          />
        </div>
      </Section>

      {/* collapsible */}
      <Section>
        <Heading level={3} icon={<FaArrowsUpDown />}>
          Collapsible
        </Heading>
        <div className="narrow flex-col gap-md">
          <Collapsible text="Expand Me" className="flex-col gap-md">
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Facilisis sed odio morbi quis commodo odio aenean sed. Urna cursus
              eget nunc scelerisque viverra mauris in aliquam. Elementum integer
              enim neque volutpat ac tincidunt vitae semper quis. Non diam
              phasellus vestibulum lorem sed risus. Amet luctus venenatis lectus
              magna.
            </p>
            <div className="flex-row gap-md">
              <span>abc</span>
              <span>123</span>
              <span>xyz</span>
            </div>
          </Collapsible>
        </div>
      </Section>

      {/* tile */}
      <Section>
        <Heading level={3} icon={<CustomIcon />}>
          Tile
        </Heading>
        <div className="flex-row gap-md">
          <Tile
            icon={<FaRegHourglass />}
            primary={formatNumber(1234)}
            secondary="Sequences"
          />
          <Tile
            icon={<CustomIcon />}
            primary={formatNumber(5678)}
            secondary="Proteins"
          />
          <Tile
            icon={<FaBars />}
            primary={formatNumber(99999)}
            secondary="Analyses"
          />
        </div>
      </Section>

      {/* form */}
      <Section>
        <Heading level={3} icon={<FaClipboardList />}>
          Form
        </Heading>
        <div className="flex-col gap-md">
          <Form onSubmit={console.info}>
            <div className="grid">
              <TextBox label="Name" name="name" />
              <TextBox
                label="Description"
                multi={true}
                name="description"
                required={true}
              />
              <NumberBox label="Age" name="age" />
              <Slider label="Cutoff" name="cutoff" />
              <Radios
                options={[
                  { id: "1", primary: "One" },
                  { id: "2", primary: "Two" },
                  { id: "3", primary: "Three" },
                ]}
                name="radio"
              />
            </div>
            <CheckBox label="I consent" name="consent" />
            <Button text="Submit" design="accent" />
          </Form>
        </div>
      </Section>

      <Section fill={true}>
        <div className="placeholder pulse" />
      </Section>

      <Section full={true}>
        <div className="placeholder" />
      </Section>
    </>
  );
};

export default Testbed;
