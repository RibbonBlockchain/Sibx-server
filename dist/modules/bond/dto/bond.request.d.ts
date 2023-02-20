import { BOND_CATEGORY } from "@prisma/client";
export declare class CreateBondInput {
    firstName: string;
    lastName: string;
    image: string;
    organizationName: string;
    organizationEmail: string;
    phoneNumber: string;
    websiteUrl: string;
    companyRegistrationNumber: string;
    socialMedia: string[];
    organizationIncorporated: boolean;
    organizationLegalEstablishmentDate: string;
    organizationRevenue: string;
    amountToRaise: string;
    reasonForRaisingMoney: string;
    organizationHasLegalDocs: boolean;
    launchDate: string;
    serviceProvider: string;
    amountToBeRaised: string;
    duration: string;
    projectIrr: string;
    maxOutcomePay: string;
    transactionFee: string;
    totalPlatformCost: string;
    policyArea: string;
    targetPopulation: string;
    independentEvaluator: string;
    overallObjectives: string;
    outcomeMetrics: string;
    outcomeTarget: string;
    category: BOND_CATEGORY;
}
export declare class UploadImageDto {
    imageFor: string;
}
