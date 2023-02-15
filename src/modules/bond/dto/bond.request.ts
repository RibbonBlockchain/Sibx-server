import { IsArray, IsBoolean, IsString } from "class-validator";

export class CreateBondInput {
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsString()
  image: string;
  @IsString()
  organizationName: string;
  @IsString()
  organizationEmail: string;
  @IsString()
  phoneNumber: string;
  @IsString()
  websiteUrl: string;
  @IsString()
  comapnyRegistrationNumber: string;
  @IsArray()
  socialMedia: string[];
  @IsBoolean()
  organizationIncorporated: boolean;
  @IsString()
  organizationLegalEstablishmentDate: string;
  @IsString()
  organizationRevenue: string;
  @IsString()
  amountToRaise: string;
  @IsString()
  reasonForRaisingMoney: string;
  @IsBoolean()
  organizationHasLegalDocs: boolean;
  @IsString()
  launchDate: string;
  @IsString()
  serviceProvider: string;
  @IsString()
  amountToBeRaised: string;
  @IsString()
  duration: string;
  @IsString()
  projectIrr: string;
  @IsString()
  maxOutcomePay: string;
  @IsString()
  transactionFee: string;
  @IsString()
  totalPlatformCost: string;
  @IsString()
  policyArea: string;
  @IsString()
  targetPopulation: string;
  @IsString()
  independentEvaluator: string;
  @IsString()
  overallObjectives: string;
  @IsString()
  outcomeMetrics: string;
  @IsString()
  outcomeTarget: string;
}

// {
//   "firstName": "Ayeola",
//   "lastName": "Kehinde",
//   "image": "google.com",
//   "organizationName": "ayeolakenny",
//   "organizationEmail": "ayeolakenny@gmail.com",
//   "phoneNumber": "+2349026503960",
//   "websiteUrl": "ayeolakenny.vercelapp.com",
//   "comapnyRegistrationNumber": "12345",
//   "socialMedia": ["www.twitter.com"],
//   "organizationIncorporated": true,
//   "organizationLegalEstablishmentDate": "11-11-1995",
//   "organizationRevenue": "10000",
//   "amountToRaise": "100000",
//   "reasonForRaisingMoney": "Fund School Children",
//   "organizationHasLegalDocs": true,
//   "launchDate": "12-23-1223",
//   "serviceProvider": "mtn",
//   "amountToBeRaised": "100",
//   "duration": "1 month",
//   "projectIrr": "12345",
//   "maxOutcomePay": "100",
//   "transactionFee": "100",
//   "totalPlatformCost": "100",
//   "policyArea": "100",
//   "targetPopulation": "100",
//   "independentEvaluator": "this is it",
//   "overallObjectives": "Fund 100 people",
//   "outcomeMetrics": "100",
//   "outcomeTarget": "10900"
// }
