import {
  CodePipelineClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CodePipelineClient";
import { DisableStageTransitionInput } from "../models/index";
import {
  deserializeAws_json1_1DisableStageTransitionCommand,
  serializeAws_json1_1DisableStageTransitionCommand
} from "../protocols/Aws_json1_1";
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
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer
} from "@aws-sdk/types";

export type DisableStageTransitionCommandInput = DisableStageTransitionInput;
export type DisableStageTransitionCommandOutput = __MetadataBearer;

export class DisableStageTransitionCommand extends $Command<
  DisableStageTransitionCommandInput,
  DisableStageTransitionCommandOutput,
  CodePipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisableStageTransitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodePipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DisableStageTransitionCommandInput,
    DisableStageTransitionCommandOutput
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
    input: DisableStageTransitionCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DisableStageTransitionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DisableStageTransitionCommandOutput> {
    return deserializeAws_json1_1DisableStageTransitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}