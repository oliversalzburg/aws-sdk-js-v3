import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import {
  PutConfigurationSetSuppressionOptionsRequest,
  PutConfigurationSetSuppressionOptionsResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutConfigurationSetSuppressionOptionsCommand,
  serializeAws_restJson1PutConfigurationSetSuppressionOptionsCommand,
} from "../protocols/Aws_restJson1";
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

export type PutConfigurationSetSuppressionOptionsCommandInput = PutConfigurationSetSuppressionOptionsRequest;
export type PutConfigurationSetSuppressionOptionsCommandOutput = PutConfigurationSetSuppressionOptionsResponse &
  __MetadataBearer;

export class PutConfigurationSetSuppressionOptionsCommand extends $Command<
  PutConfigurationSetSuppressionOptionsCommandInput,
  PutConfigurationSetSuppressionOptionsCommandOutput,
  SESv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutConfigurationSetSuppressionOptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutConfigurationSetSuppressionOptionsCommandInput, PutConfigurationSetSuppressionOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: PutConfigurationSetSuppressionOptionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutConfigurationSetSuppressionOptionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutConfigurationSetSuppressionOptionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PutConfigurationSetSuppressionOptionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutConfigurationSetSuppressionOptionsCommandOutput> {
    return deserializeAws_restJson1PutConfigurationSetSuppressionOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
