import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import {
  PutClassificationExportConfigurationRequest,
  PutClassificationExportConfigurationResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutClassificationExportConfigurationCommand,
  serializeAws_restJson1PutClassificationExportConfigurationCommand,
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

export type PutClassificationExportConfigurationCommandInput = PutClassificationExportConfigurationRequest;
export type PutClassificationExportConfigurationCommandOutput = PutClassificationExportConfigurationResponse &
  __MetadataBearer;

export class PutClassificationExportConfigurationCommand extends $Command<
  PutClassificationExportConfigurationCommandInput,
  PutClassificationExportConfigurationCommandOutput,
  Macie2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutClassificationExportConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutClassificationExportConfigurationCommandInput, PutClassificationExportConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: PutClassificationExportConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutClassificationExportConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutClassificationExportConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PutClassificationExportConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutClassificationExportConfigurationCommandOutput> {
    return deserializeAws_restJson1PutClassificationExportConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
