/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type TermsStruct = {
  loanDaiAmount: BigNumberish;
  feeDaiAmount: BigNumberish;
  ethCollateralAmount: BigNumberish;
  repayByTimestamp: BigNumberish;
};

export type TermsStructOutput = [BigNumber, BigNumber, BigNumber, BigNumber] & {
  loanDaiAmount: BigNumber;
  feeDaiAmount: BigNumber;
  ethCollateralAmount: BigNumber;
  repayByTimestamp: BigNumber;
};

export interface LoanInterface extends utils.Interface {
  functions: {
    "create((uint256,uint256,uint256,uint256),address)": FunctionFragment;
    "fundLoan()": FunctionFragment;
    "getState()": FunctionFragment;
    "liquidate()": FunctionFragment;
    "repay()": FunctionFragment;
    "takeALoanAndAcceptLoanTerms()": FunctionFragment;
    "tokenaddress()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "create",
    values: [TermsStruct, string]
  ): string;
  encodeFunctionData(functionFragment: "fundLoan", values?: undefined): string;
  encodeFunctionData(functionFragment: "getState", values?: undefined): string;
  encodeFunctionData(functionFragment: "liquidate", values?: undefined): string;
  encodeFunctionData(functionFragment: "repay", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "takeALoanAndAcceptLoanTerms",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenaddress",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "create", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fundLoan", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getState", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "liquidate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "repay", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "takeALoanAndAcceptLoanTerms",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenaddress",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Loan extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LoanInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    create(
      _terms: TermsStruct,
      _daiAdress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fundLoan(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getState(overrides?: CallOverrides): Promise<[string]>;

    liquidate(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    repay(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    takeALoanAndAcceptLoanTerms(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokenaddress(overrides?: CallOverrides): Promise<[string]>;
  };

  create(
    _terms: TermsStruct,
    _daiAdress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fundLoan(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getState(overrides?: CallOverrides): Promise<string>;

  liquidate(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  repay(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  takeALoanAndAcceptLoanTerms(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokenaddress(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    create(
      _terms: TermsStruct,
      _daiAdress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    fundLoan(overrides?: CallOverrides): Promise<void>;

    getState(overrides?: CallOverrides): Promise<string>;

    liquidate(overrides?: CallOverrides): Promise<void>;

    repay(overrides?: CallOverrides): Promise<void>;

    takeALoanAndAcceptLoanTerms(overrides?: CallOverrides): Promise<void>;

    tokenaddress(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    create(
      _terms: TermsStruct,
      _daiAdress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fundLoan(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getState(overrides?: CallOverrides): Promise<BigNumber>;

    liquidate(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    repay(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    takeALoanAndAcceptLoanTerms(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokenaddress(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    create(
      _terms: TermsStruct,
      _daiAdress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fundLoan(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getState(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidate(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    repay(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    takeALoanAndAcceptLoanTerms(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokenaddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
