import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import Tooltip from "@/components/Tooltip";
import { formatDate, parseDate } from "@/util/string";

TimeAgo.addDefaultLocale(en);

type Props = {
  /** iso date string or date object */
  date: string | Date;
};

/** show time in "ago" format */
const Ago = ({ date }: Props) => (
  <Tooltip content={formatDate(date)}>
    <span>
      <ReactTimeAgo date={parseDate(date)} locale="en-US" />
    </span>
  </Tooltip>
);

export default Ago;
