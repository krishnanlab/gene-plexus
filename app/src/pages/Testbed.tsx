import {
  FaArrowRight,
  FaArrowsUpDown,
  FaBars,
  FaChampagneGlasses,
  FaCircleInfo,
  FaClipboardList,
  FaFlaskVial,
  FaFont,
  FaHashtag,
  FaMagnifyingGlass,
  FaRegCircleDot,
  FaRegHourglass,
  FaRegSquareCheck,
  FaSliders,
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

        <Tabs syncWithUrl="component">
          {/* button */}
          <Tab
            text="Button"
            icon={<FaRegCircleDot />}
            tooltip="Lorem ipsum"
            className="flex-row gap-sm"
          >
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
              icon={<CustomIcon />}
              design="critical"
              tooltip={<>Hello World</>}
            />
          </Tab>

          {/* textbox */}
          <Tab text="Text" icon={<FaFont />} className="flex-col gap-lg">
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
              <TextBox
                label="TextBox"
                placeholder="Search"
                tooltip="Help text"
              />
              <TextBox
                label="TextBox"
                multi={true}
                placeholder="Search"
                tooltip="Help text"
                required={true}
              />
            </div>
          </Tab>

          {/* checkbox */}
          <Tab
            text="Check"
            icon={<FaRegSquareCheck />}
            className="flex-col gap-md"
          >
            <CheckBox
              label="Accept terms and conditions"
              name="accept"
              onChange={console.info}
            />
          </Tab>

          {/* slider */}
          <Tab text="Slider" icon={<FaSliders />} className="flex-col gap-md">
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
          </Tab>

          {/* number box */}
          <Tab text="Number" icon={<FaHashtag />} className="flex-col gap-md">
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
          </Tab>

          {/* ago */}
          <Tab text="Ago" icon={<FaRegHourglass />} className="flex-row gap-sm">
            <Ago date="" />
            <Ago date="Nov 12 2023" />
            <Ago date="Jun 1 2020" />
          </Tab>

          {/* alert */}
          <Tab text="Alert" icon={<FaCircleInfo />} className="flex-col gap-md">
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
          </Tab>

          {/* toast */}
          <Tab
            text="Toast"
            icon={<FaChampagneGlasses />}
            className="flex-row gap-sm"
          >
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
          </Tab>

          {/* collapsible */}
          <Tab
            text="Collapsible"
            icon={<FaArrowsUpDown />}
            className="narrow flex-col gap-md"
          >
            <Collapsible text="Expand Me" className="flex-col gap-md">
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Facilisis sed odio morbi quis commodo odio aenean sed. Urna
                cursus eget nunc scelerisque viverra mauris in aliquam.
                Elementum integer enim neque volutpat ac tincidunt vitae semper
                quis. Non diam phasellus vestibulum lorem sed risus. Amet luctus
                venenatis lectus magna.
              </p>
              <div className="flex-row gap-md">
                <span>abc</span>
                <span>123</span>
                <span>xyz</span>
              </div>
            </Collapsible>
          </Tab>

          {/* tile */}
          <Tab text="Tile" icon={<CustomIcon />} className="flex-row gap-md">
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
          </Tab>

          {/* form */}
          <Tab
            text="Form"
            icon={<FaClipboardList />}
            className="flex-col gap-md"
          >
            <Form onSubmit={console.info}>
              <div className="grid">
                <TextBox
                  label="Name"
                  placeholder="Name"
                  name="name"
                  tooltip="Help text"
                />
                <TextBox
                  label="Describe your issue"
                  multi={true}
                  name="description"
                  required={true}
                  tooltip="Help text"
                />
              </div>
              <CheckBox label="Send me a copy of my response" name="copy" />
              <Button text="Submit" design="accent" />
            </Form>
          </Tab>
        </Tabs>
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
