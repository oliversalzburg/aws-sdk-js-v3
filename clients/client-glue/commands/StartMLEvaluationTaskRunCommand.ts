import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StartMLEvaluationTaskRunRequest, StartMLEvaluationTaskRunResponse } from "../models/models_1";
import {
  deserializeAws_json1_1StartMLEvaluationTaskRunCommand,
  serializeAws_json1_1StartMLEvaluationTaskRunCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type StartMLEvaluationTaskRunCommandInput = StartMLEvaluationTaskRunRequest;
export type StartMLEvaluationTaskRunCommandOutput = StartMLEvaluationTaskRunResponse & __MetadataBearer;

export class StartMLEvaluationTaskRunCommand extends $Command<
  StartMLEvaluationTaskRunCommandInput,
  StartMLEvaluationTaskRunCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartMLEvaluationTaskRunCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartMLEvaluationTaskRunCommandInput, StartMLEvaluationTaskRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: StartMLEvaluationTaskRunRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartMLEvaluationTaskRunResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartMLEvaluationTaskRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartMLEvaluationTaskRunCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartMLEvaluationTaskRunCommandOutput> {
    return deserializeAws_json1_1StartMLEvaluationTaskRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
