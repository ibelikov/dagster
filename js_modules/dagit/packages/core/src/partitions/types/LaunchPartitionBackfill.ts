// @generated
/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LaunchBackfillParams, EvaluationErrorReason } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: LaunchPartitionBackfill
// ====================================================

export interface LaunchPartitionBackfill_launchPartitionBackfill_NoModeProvidedError {
  __typename: "NoModeProvidedError";
}

export interface LaunchPartitionBackfill_launchPartitionBackfill_LaunchBackfillSuccess {
  __typename: "LaunchBackfillSuccess";
  backfillId: string;
}

export interface LaunchPartitionBackfill_launchPartitionBackfill_PartitionSetNotFoundError {
  __typename: "PartitionSetNotFoundError";
  message: string;
}

export interface LaunchPartitionBackfill_launchPartitionBackfill_PythonError_cause {
  __typename: "PythonError";
  message: string;
  stack: string[];
}

export interface LaunchPartitionBackfill_launchPartitionBackfill_PythonError {
  __typename: "PythonError";
  message: string;
  stack: string[];
  cause: LaunchPartitionBackfill_launchPartitionBackfill_PythonError_cause | null;
}

export interface LaunchPartitionBackfill_launchPartitionBackfill_InvalidStepError {
  __typename: "InvalidStepError";
  invalidStepKey: string;
}

export interface LaunchPartitionBackfill_launchPartitionBackfill_InvalidOutputError {
  __typename: "InvalidOutputError";
  stepKey: string;
  invalidOutputName: string;
}

export interface LaunchPartitionBackfill_launchPartitionBackfill_UnauthorizedError {
  __typename: "UnauthorizedError";
  message: string;
}

export interface LaunchPartitionBackfill_launchPartitionBackfill_PipelineNotFoundError {
  __typename: "PipelineNotFoundError";
  message: string;
}

export interface LaunchPartitionBackfill_launchPartitionBackfill_RunConflict {
  __typename: "RunConflict";
  message: string;
}

export interface LaunchPartitionBackfill_launchPartitionBackfill_ConflictingExecutionParamsError {
  __typename: "ConflictingExecutionParamsError";
  message: string;
}

export interface LaunchPartitionBackfill_launchPartitionBackfill_PresetNotFoundError {
  __typename: "PresetNotFoundError";
  message: string;
}

export interface LaunchPartitionBackfill_launchPartitionBackfill_RunConfigValidationInvalid_errors {
  __typename: "FieldNotDefinedConfigError" | "FieldsNotDefinedConfigError" | "MissingFieldConfigError" | "MissingFieldsConfigError" | "RuntimeMismatchConfigError" | "SelectorTypeConfigError";
  message: string;
  path: string[];
  reason: EvaluationErrorReason;
}

export interface LaunchPartitionBackfill_launchPartitionBackfill_RunConfigValidationInvalid {
  __typename: "RunConfigValidationInvalid";
  pipelineName: string;
  errors: LaunchPartitionBackfill_launchPartitionBackfill_RunConfigValidationInvalid_errors[];
}

export type LaunchPartitionBackfill_launchPartitionBackfill = LaunchPartitionBackfill_launchPartitionBackfill_NoModeProvidedError | LaunchPartitionBackfill_launchPartitionBackfill_LaunchBackfillSuccess | LaunchPartitionBackfill_launchPartitionBackfill_PartitionSetNotFoundError | LaunchPartitionBackfill_launchPartitionBackfill_PythonError | LaunchPartitionBackfill_launchPartitionBackfill_InvalidStepError | LaunchPartitionBackfill_launchPartitionBackfill_InvalidOutputError | LaunchPartitionBackfill_launchPartitionBackfill_UnauthorizedError | LaunchPartitionBackfill_launchPartitionBackfill_PipelineNotFoundError | LaunchPartitionBackfill_launchPartitionBackfill_RunConflict | LaunchPartitionBackfill_launchPartitionBackfill_ConflictingExecutionParamsError | LaunchPartitionBackfill_launchPartitionBackfill_PresetNotFoundError | LaunchPartitionBackfill_launchPartitionBackfill_RunConfigValidationInvalid;

export interface LaunchPartitionBackfill {
  launchPartitionBackfill: LaunchPartitionBackfill_launchPartitionBackfill;
}

export interface LaunchPartitionBackfillVariables {
  backfillParams: LaunchBackfillParams;
}
