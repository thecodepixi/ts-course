import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCSV('football.csv');
matchReader.load();

const manUnitedSummary = Summary.winsWithHtml('Man United');

const arsenalSummary = Summary.winsToConsole('Arsenal');

manUnitedSummary.buildAndPrintReport(matchReader.matches);
arsenalSummary.buildAndPrintReport(matchReader.matches);
