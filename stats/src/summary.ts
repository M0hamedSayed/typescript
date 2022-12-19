import { MatchData } from "./MatchData";
import { WinAnalysis } from './analyzer/WinsAnalyzer';
import { ConsoleReport } from "./reportTargets/ConsoleReport";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) { }

  static WinAnalysisWithReport(team: string): Summary {
    return new Summary(
      new WinAnalysis(team),
      new ConsoleReport()
    )
  };

  buildAndPrintReport(matches: MatchData[]): void {
    const outputReport = this.analyzer.run(matches);
    this.outputTarget.print(outputReport);
  }
}