import { BOND_CATEGORY } from "@prisma/client";
import { IsArray, IsBoolean, IsEnum, IsString } from "class-validator";

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
  @IsEnum(BOND_CATEGORY)
  category: BOND_CATEGORY;
}

export class UploadImageDto {
  @IsString()
  imageFor: string;
}
