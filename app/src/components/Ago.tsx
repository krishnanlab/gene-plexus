import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import Tooltip from "@/components/Tooltip";
import { formatDate, parseDate } from "@/util/string";

/** init library with english */
TimeAgo.addDefaultLocale(en);

type Props = {
  /** iso date string or date object */
  date: string | Date;
};

/** show datetime in "ago" format, e.g. "20 min ago" */
const Ago = ({ date }: Props) => {
  return (
    <Tooltip content={formatDate(date)}>
      <span>
        <ReactTimeAgo date={parseDate(date)} locale="en-US" />
      </span>
    </Tooltip>
  );
};

export default Ago;
