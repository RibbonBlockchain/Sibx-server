import { BOND_CATEGORY } from "@prisma/client";
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNumber,
  IsString,
} from "class-validator";

export class CreateBondInput {
  @IsString()
  name: string;
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
  companyRegistrationNumber: string;
  @IsBoolean()
  organizationIncorporated: boolean;
  @IsString()
  organizationLegalEstablishmentDate: string;
  @IsString()
  organizationRevenue: string;
  @IsNumber()
  amountToRaise: number;
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
  @IsNumber()
  duration: number;
  @IsNumber()
  projectIrr: number;
  @IsNumber()
  maxOutcomePay: number;
  @IsNumber()
  transactionFee: number;
  @IsNumber()
  totalPlatformCost: number;
  @IsString()
  policyArea: string;
  @IsNumber()
  targetPopulation: number;
  @IsString()
  independentEvaluator: string;
  @IsString()
  overallObjectives: string;
  @IsString()
  outcomeMetrics: string;
  @IsString()
  outcomeTarget: string;
  @IsEnum(BOND_CATEGORY)
  category: BOND_CATEGORY;
  @IsString()
  description: string;
  @IsString()
  facebookLink: string;
  @IsString()
  linkedinLink: string;
  @IsString()
  twitterLink: string;
  @IsString()
  instagramLink: string;
  @IsString()
  websiteLink: string;
  @IsString()
  other: string;
}

export class UploadImageDto {
  @IsString()
  imageFor: string;
}
