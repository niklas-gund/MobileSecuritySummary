import { MarketShareGraph } from "./MarketShareGraph";

export default function Motivation() {
  return (
    <div>
      <h1>Motivation</h1>
      <h2>Why is most research Android focused?</h2>
      <ul>
        <li>(Almost) completely open source</li>
        <li>Large marketshare ({">"}70%)</li>
        <MarketShareGraph />
      </ul>
      <h2>Attack Models</h2>
      <ul>
        <li>Rogue base station (mobile network)</li>
        <li>Runtime attacks</li>
        <li>Baseband attacks (communication firmware) </li>
        
      </ul>
    </div>
  );
}
