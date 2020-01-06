import {
  ChimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ChimeClient";
import {
  BatchUpdatePhoneNumberRequest,
  BatchUpdatePhoneNumberResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1BatchUpdatePhoneNumberCommand,
  serializeAws_restJson1_1BatchUpdatePhoneNumberCommand
} from "../protocols/Aws_restJson1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type BatchUpdatePhoneNumberCommandInput = BatchUpdatePhoneNumberRequest;
export type BatchUpdatePhoneNumberCommandOutput = BatchUpdatePhoneNumberResponse;

export class BatchUpdatePhoneNumberCommand extends $Command<
  BatchUpdatePhoneNumberCommandInput,
  BatchUpdatePhoneNumberCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchUpdatePhoneNumberCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    BatchUpdatePhoneNumberCommandInput,
    BatchUpdatePhoneNumberCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: BatchUpdatePhoneNumberCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1BatchUpdatePhoneNumberCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<BatchUpdatePhoneNumberCommandOutput> {
    return deserializeAws_restJson1_1BatchUpdatePhoneNumberCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}