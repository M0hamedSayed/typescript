import { dateStringToDate } from "./utils";
import { MatchReader } from "./MatchReader";
import { Summary } from "./summary";
import { WinAnalysis } from "./analyzer/WinsAnalyzer";
import { ConsoleReport } from './reportTargets/ConsoleReport';

const reader = new MatchReader('football.csv');
reader.read();

const summary = Summary.WinAnalysisWithReport('Man United');

summary.buildAndPrintReport(reader.data);



