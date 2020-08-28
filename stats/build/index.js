"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var matchReader = MatchReader_1.MatchReader.fromCSV('football.csv');
matchReader.load();
var manUnitedSummary = Summary_1.Summary.winsWithHtml('Man United');
var arsenalSummary = Summary_1.Summary.winsToConsole('Arsenal');
manUnitedSummary.buildAndPrintReport(matchReader.matches);
arsenalSummary.buildAndPrintReport(matchReader.matches);
