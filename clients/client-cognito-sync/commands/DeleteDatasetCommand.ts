import {
  CognitoSyncClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CognitoSyncClient";
import { DeleteDatasetRequest, DeleteDatasetResponse } from "../models/index";
import {
  deserializeAws_restJson1_1DeleteDatasetCommand,
  serializeAws_restJson1_1DeleteDatasetCommand
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

export type DeleteDatasetCommandInput = DeleteDatasetRequest;
export type DeleteDatasetCommandOutput = DeleteDatasetResponse;

export class DeleteDatasetCommand extends $Command<
  DeleteDatasetCommandInput,
  DeleteDatasetCommandOutput,
  CognitoSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDatasetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDatasetCommandInput, DeleteDatasetCommandOutput> {
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
    input: DeleteDatasetCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1DeleteDatasetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DeleteDatasetCommandOutput> {
    return deserializeAws_restJson1_1DeleteDatasetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}