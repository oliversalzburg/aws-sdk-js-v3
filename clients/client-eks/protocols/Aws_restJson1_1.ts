import {
  CreateClusterCommandInput,
  CreateClusterCommandOutput
} from "../commands/CreateClusterCommand";
import {
  CreateFargateProfileCommandInput,
  CreateFargateProfileCommandOutput
} from "../commands/CreateFargateProfileCommand";
import {
  CreateNodegroupCommandInput,
  CreateNodegroupCommandOutput
} from "../commands/CreateNodegroupCommand";
import {
  DeleteClusterCommandInput,
  DeleteClusterCommandOutput
} from "../commands/DeleteClusterCommand";
import {
  DeleteFargateProfileCommandInput,
  DeleteFargateProfileCommandOutput
} from "../commands/DeleteFargateProfileCommand";
import {
  DeleteNodegroupCommandInput,
  DeleteNodegroupCommandOutput
} from "../commands/DeleteNodegroupCommand";
import {
  DescribeClusterCommandInput,
  DescribeClusterCommandOutput
} from "../commands/DescribeClusterCommand";
import {
  DescribeFargateProfileCommandInput,
  DescribeFargateProfileCommandOutput
} from "../commands/DescribeFargateProfileCommand";
import {
  DescribeNodegroupCommandInput,
  DescribeNodegroupCommandOutput
} from "../commands/DescribeNodegroupCommand";
import {
  DescribeUpdateCommandInput,
  DescribeUpdateCommandOutput
} from "../commands/DescribeUpdateCommand";
import {
  ListClustersCommandInput,
  ListClustersCommandOutput
} from "../commands/ListClustersCommand";
import {
  ListFargateProfilesCommandInput,
  ListFargateProfilesCommandOutput
} from "../commands/ListFargateProfilesCommand";
import {
  ListNodegroupsCommandInput,
  ListNodegroupsCommandOutput
} from "../commands/ListNodegroupsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  ListUpdatesCommandInput,
  ListUpdatesCommandOutput
} from "../commands/ListUpdatesCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateClusterConfigCommandInput,
  UpdateClusterConfigCommandOutput
} from "../commands/UpdateClusterConfigCommand";
import {
  UpdateClusterVersionCommandInput,
  UpdateClusterVersionCommandOutput
} from "../commands/UpdateClusterVersionCommand";
import {
  UpdateNodegroupConfigCommandInput,
  UpdateNodegroupConfigCommandOutput
} from "../commands/UpdateNodegroupConfigCommand";
import {
  UpdateNodegroupVersionCommandInput,
  UpdateNodegroupVersionCommandOutput
} from "../commands/UpdateNodegroupVersionCommand";
import {
  AutoScalingGroup,
  BadRequestException,
  Certificate,
  ClientException,
  Cluster,
  ErrorDetail,
  FargateProfile,
  FargateProfileSelector,
  Identity,
  InvalidParameterException,
  InvalidRequestException,
  Issue,
  LogSetup,
  LogType,
  Logging,
  Nodegroup,
  NodegroupHealth,
  NodegroupResources,
  NodegroupScalingConfig,
  NotFoundException,
  OIDC,
  RemoteAccessConfig,
  ResourceInUseException,
  ResourceLimitExceededException,
  ResourceNotFoundException,
  ServerException,
  ServiceUnavailableException,
  UnsupportedAvailabilityZoneException,
  Update,
  UpdateLabelsPayload,
  UpdateParam,
  VpcConfigRequest,
  VpcConfigResponse
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_restJson1_1CreateClusterCommand(
  input: CreateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/clusters";
  let body: any = {};
  const bodyParams: any = {};
  if (input.clientRequestToken !== undefined) {
    bodyParams["clientRequestToken"] = input.clientRequestToken;
  }
  if (input.logging !== undefined) {
    bodyParams["logging"] = serializeAws_restJson1_1Logging(
      input.logging,
      context
    );
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.resourcesVpcConfig !== undefined) {
    bodyParams["resourcesVpcConfig"] = serializeAws_restJson1_1VpcConfigRequest(
      input.resourcesVpcConfig,
      context
    );
  }
  if (input.roleArn !== undefined) {
    bodyParams["roleArn"] = input.roleArn;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagMap(input.tags, context);
  }
  if (input.version !== undefined) {
    bodyParams["version"] = input.version;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateFargateProfileCommand(
  input: CreateFargateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/clusters/{clusterName}/fargate-profiles";
  if (input.clusterName !== undefined) {
    const labelValue: any = input.clusterName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: clusterName."
      );
    }
    resolvedPath = resolvedPath.replace("{clusterName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.clientRequestToken !== undefined) {
    bodyParams["clientRequestToken"] = input.clientRequestToken;
  }
  if (input.fargateProfileName !== undefined) {
    bodyParams["fargateProfileName"] = input.fargateProfileName;
  }
  if (input.podExecutionRoleArn !== undefined) {
    bodyParams["podExecutionRoleArn"] = input.podExecutionRoleArn;
  }
  if (input.selectors !== undefined) {
    bodyParams["selectors"] = serializeAws_restJson1_1FargateProfileSelectors(
      input.selectors,
      context
    );
  }
  if (input.subnets !== undefined) {
    bodyParams["subnets"] = serializeAws_restJson1_1StringList(
      input.subnets,
      context
    );
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagMap(input.tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateNodegroupCommand(
  input: CreateNodegroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/clusters/{clusterName}/node-groups";
  if (input.clusterName !== undefined) {
    const labelValue: any = input.clusterName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: clusterName."
      );
    }
    resolvedPath = resolvedPath.replace("{clusterName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.amiType !== undefined) {
    bodyParams["amiType"] = input.amiType;
  }
  if (input.clientRequestToken !== undefined) {
    bodyParams["clientRequestToken"] = input.clientRequestToken;
  }
  if (input.diskSize !== undefined) {
    bodyParams["diskSize"] = input.diskSize;
  }
  if (input.instanceTypes !== undefined) {
    bodyParams["instanceTypes"] = serializeAws_restJson1_1StringList(
      input.instanceTypes,
      context
    );
  }
  if (input.labels !== undefined) {
    bodyParams["labels"] = serializeAws_restJson1_1labelsMap(
      input.labels,
      context
    );
  }
  if (input.nodeRole !== undefined) {
    bodyParams["nodeRole"] = input.nodeRole;
  }
  if (input.nodegroupName !== undefined) {
    bodyParams["nodegroupName"] = input.nodegroupName;
  }
  if (input.releaseVersion !== undefined) {
    bodyParams["releaseVersion"] = input.releaseVersion;
  }
  if (input.remoteAccess !== undefined) {
    bodyParams["remoteAccess"] = serializeAws_restJson1_1RemoteAccessConfig(
      input.remoteAccess,
      context
    );
  }
  if (input.scalingConfig !== undefined) {
    bodyParams[
      "scalingConfig"
    ] = serializeAws_restJson1_1NodegroupScalingConfig(
      input.scalingConfig,
      context
    );
  }
  if (input.subnets !== undefined) {
    bodyParams["subnets"] = serializeAws_restJson1_1StringList(
      input.subnets,
      context
    );
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagMap(input.tags, context);
  }
  if (input.version !== undefined) {
    bodyParams["version"] = input.version;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DeleteClusterCommand(
  input: DeleteClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/clusters/{name}";
  if (input.name !== undefined) {
    const labelValue: any = input.name.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteFargateProfileCommand(
  input: DeleteFargateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/clusters/{clusterName}/fargate-profiles/{fargateProfileName}";
  if (input.clusterName !== undefined) {
    const labelValue: any = input.clusterName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: clusterName."
      );
    }
    resolvedPath = resolvedPath.replace("{clusterName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  if (input.fargateProfileName !== undefined) {
    const labelValue: any = input.fargateProfileName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: fargateProfileName."
      );
    }
    resolvedPath = resolvedPath.replace("{fargateProfileName}", labelValue);
  } else {
    throw new Error(
      "No value provided for input HTTP label: fargateProfileName."
    );
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteNodegroupCommand(
  input: DeleteNodegroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/clusters/{clusterName}/node-groups/{nodegroupName}";
  if (input.clusterName !== undefined) {
    const labelValue: any = input.clusterName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: clusterName."
      );
    }
    resolvedPath = resolvedPath.replace("{clusterName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  if (input.nodegroupName !== undefined) {
    const labelValue: any = input.nodegroupName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: nodegroupName."
      );
    }
    resolvedPath = resolvedPath.replace("{nodegroupName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: nodegroupName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeClusterCommand(
  input: DescribeClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/clusters/{name}";
  if (input.name !== undefined) {
    const labelValue: any = input.name.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeFargateProfileCommand(
  input: DescribeFargateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/clusters/{clusterName}/fargate-profiles/{fargateProfileName}";
  if (input.clusterName !== undefined) {
    const labelValue: any = input.clusterName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: clusterName."
      );
    }
    resolvedPath = resolvedPath.replace("{clusterName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  if (input.fargateProfileName !== undefined) {
    const labelValue: any = input.fargateProfileName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: fargateProfileName."
      );
    }
    resolvedPath = resolvedPath.replace("{fargateProfileName}", labelValue);
  } else {
    throw new Error(
      "No value provided for input HTTP label: fargateProfileName."
    );
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeNodegroupCommand(
  input: DescribeNodegroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/clusters/{clusterName}/node-groups/{nodegroupName}";
  if (input.clusterName !== undefined) {
    const labelValue: any = input.clusterName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: clusterName."
      );
    }
    resolvedPath = resolvedPath.replace("{clusterName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  if (input.nodegroupName !== undefined) {
    const labelValue: any = input.nodegroupName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: nodegroupName."
      );
    }
    resolvedPath = resolvedPath.replace("{nodegroupName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: nodegroupName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeUpdateCommand(
  input: DescribeUpdateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/clusters/{name}/updates/{updateId}";
  if (input.name !== undefined) {
    const labelValue: any = input.name.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  if (input.updateId !== undefined) {
    const labelValue: any = input.updateId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: updateId.");
    }
    resolvedPath = resolvedPath.replace("{updateId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: updateId.");
  }
  const query: any = {};
  if (input.nodegroupName !== undefined) {
    query["nodegroupName"] = input.nodegroupName.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListClustersCommand(
  input: ListClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/clusters";
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListFargateProfilesCommand(
  input: ListFargateProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/clusters/{clusterName}/fargate-profiles";
  if (input.clusterName !== undefined) {
    const labelValue: any = input.clusterName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: clusterName."
      );
    }
    resolvedPath = resolvedPath.replace("{clusterName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListNodegroupsCommand(
  input: ListNodegroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/clusters/{clusterName}/node-groups";
  if (input.clusterName !== undefined) {
    const labelValue: any = input.clusterName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: clusterName."
      );
    }
    resolvedPath = resolvedPath.replace("{clusterName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: any = input.resourceArn.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: resourceArn."
      );
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ListUpdatesCommand(
  input: ListUpdatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/clusters/{name}/updates";
  if (input.name !== undefined) {
    const labelValue: any = input.name.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken.toString();
  }
  if (input.nodegroupName !== undefined) {
    query["nodegroupName"] = input.nodegroupName.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: any = input.resourceArn.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: resourceArn."
      );
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagMap(input.tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: any = input.resourceArn.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: resourceArn."
      );
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  const query: any = {};
  if (input.tagKeys !== undefined) {
    query["tagKeys"] = input.tagKeys;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1UpdateClusterConfigCommand(
  input: UpdateClusterConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/clusters/{name}/update-config";
  if (input.name !== undefined) {
    const labelValue: any = input.name.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.clientRequestToken !== undefined) {
    bodyParams["clientRequestToken"] = input.clientRequestToken;
  }
  if (input.logging !== undefined) {
    bodyParams["logging"] = serializeAws_restJson1_1Logging(
      input.logging,
      context
    );
  }
  if (input.resourcesVpcConfig !== undefined) {
    bodyParams["resourcesVpcConfig"] = serializeAws_restJson1_1VpcConfigRequest(
      input.resourcesVpcConfig,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateClusterVersionCommand(
  input: UpdateClusterVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/clusters/{name}/updates";
  if (input.name !== undefined) {
    const labelValue: any = input.name.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.clientRequestToken !== undefined) {
    bodyParams["clientRequestToken"] = input.clientRequestToken;
  }
  if (input.version !== undefined) {
    bodyParams["version"] = input.version;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateNodegroupConfigCommand(
  input: UpdateNodegroupConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath =
    "/clusters/{clusterName}/node-groups/{nodegroupName}/update-config";
  if (input.clusterName !== undefined) {
    const labelValue: any = input.clusterName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: clusterName."
      );
    }
    resolvedPath = resolvedPath.replace("{clusterName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  if (input.nodegroupName !== undefined) {
    const labelValue: any = input.nodegroupName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: nodegroupName."
      );
    }
    resolvedPath = resolvedPath.replace("{nodegroupName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: nodegroupName.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.clientRequestToken !== undefined) {
    bodyParams["clientRequestToken"] = input.clientRequestToken;
  }
  if (input.labels !== undefined) {
    bodyParams["labels"] = serializeAws_restJson1_1UpdateLabelsPayload(
      input.labels,
      context
    );
  }
  if (input.scalingConfig !== undefined) {
    bodyParams[
      "scalingConfig"
    ] = serializeAws_restJson1_1NodegroupScalingConfig(
      input.scalingConfig,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateNodegroupVersionCommand(
  input: UpdateNodegroupVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath =
    "/clusters/{clusterName}/node-groups/{nodegroupName}/update-version";
  if (input.clusterName !== undefined) {
    const labelValue: any = input.clusterName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: clusterName."
      );
    }
    resolvedPath = resolvedPath.replace("{clusterName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  if (input.nodegroupName !== undefined) {
    const labelValue: any = input.nodegroupName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: nodegroupName."
      );
    }
    resolvedPath = resolvedPath.replace("{nodegroupName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: nodegroupName.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.clientRequestToken !== undefined) {
    bodyParams["clientRequestToken"] = input.clientRequestToken;
  }
  if (input.force !== undefined) {
    bodyParams["force"] = input.force;
  }
  if (input.releaseVersion !== undefined) {
    bodyParams["releaseVersion"] = input.releaseVersion;
  }
  if (input.version !== undefined) {
    bodyParams["version"] = input.version;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1CreateClusterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1CreateClusterCommandError(output, context);
  }
  const contents: CreateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateClusterResponse",
    cluster: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.cluster !== undefined) {
    contents.cluster = deserializeAws_restJson1_1Cluster(data.cluster, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateClusterCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.wesley.fe#ClientException":
      response = await deserializeAws_restJson1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.wesley.fe#InvalidParameterException":
      response = await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.wesley.fe#ResourceInUseException":
      response = await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.wesley.fe#ResourceLimitExceededException":
      response = await deserializeAws_restJson1_1ResourceLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.wesley.fe#ServerException":
      response = await deserializeAws_restJson1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.wesley.fe#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedAvailabilityZoneException":
    case "com.amazonaws.wesley.fe#UnsupportedAvailabilityZoneException":
      response = await deserializeAws_restJson1_1UnsupportedAvailabilityZoneExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.wesley.fe#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateFargateProfileCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFargateProfileCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1CreateFargateProfileCommandError(
      output,
      context
    );
  }
  const contents: CreateFargateProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateFargateProfileResponse",
    fargateProfile: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.fargateProfile !== undefined) {
    contents.fargateProfile = deserializeAws_restJson1_1FargateProfile(
      data.fargateProfile,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateFargateProfileCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFargateProfileCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.wesley.fe#ClientException":
      response = await deserializeAws_restJson1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.wesley.fe#InvalidParameterException":
      response = await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.wesley.fe#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.wesley.fe#ResourceLimitExceededException":
      response = await deserializeAws_restJson1_1ResourceLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.wesley.fe#ServerException":
      response = await deserializeAws_restJson1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedAvailabilityZoneException":
    case "com.amazonaws.wesley.fe#UnsupportedAvailabilityZoneException":
      response = await deserializeAws_restJson1_1UnsupportedAvailabilityZoneExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.wesley.fe#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateNodegroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNodegroupCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1CreateNodegroupCommandError(
      output,
      context
    );
  }
  const contents: CreateNodegroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateNodegroupResponse",
    nodegroup: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nodegroup !== undefined) {
    contents.nodegroup = deserializeAws_restJson1_1Nodegroup(
      data.nodegroup,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateNodegroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNodegroupCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.wesley.fe#ClientException":
      response = await deserializeAws_restJson1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.wesley.fe#InvalidParameterException":
      response = await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.wesley.fe#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.wesley.fe#ResourceInUseException":
      response = await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.wesley.fe#ResourceLimitExceededException":
      response = await deserializeAws_restJson1_1ResourceLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.wesley.fe#ServerException":
      response = await deserializeAws_restJson1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.wesley.fe#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.wesley.fe#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteClusterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DeleteClusterCommandError(output, context);
  }
  const contents: DeleteClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteClusterResponse",
    cluster: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.cluster !== undefined) {
    contents.cluster = deserializeAws_restJson1_1Cluster(data.cluster, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteClusterCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.wesley.fe#ClientException":
      response = await deserializeAws_restJson1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.wesley.fe#ResourceInUseException":
      response = await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.wesley.fe#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.wesley.fe#ServerException":
      response = await deserializeAws_restJson1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.wesley.fe#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.wesley.fe#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteFargateProfileCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFargateProfileCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DeleteFargateProfileCommandError(
      output,
      context
    );
  }
  const contents: DeleteFargateProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteFargateProfileResponse",
    fargateProfile: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.fargateProfile !== undefined) {
    contents.fargateProfile = deserializeAws_restJson1_1FargateProfile(
      data.fargateProfile,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteFargateProfileCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFargateProfileCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.wesley.fe#ClientException":
      response = await deserializeAws_restJson1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.wesley.fe#InvalidParameterException":
      response = await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.wesley.fe#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.wesley.fe#ServerException":
      response = await deserializeAws_restJson1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.wesley.fe#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteNodegroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNodegroupCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DeleteNodegroupCommandError(
      output,
      context
    );
  }
  const contents: DeleteNodegroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteNodegroupResponse",
    nodegroup: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nodegroup !== undefined) {
    contents.nodegroup = deserializeAws_restJson1_1Nodegroup(
      data.nodegroup,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteNodegroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNodegroupCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.wesley.fe#ClientException":
      response = await deserializeAws_restJson1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.wesley.fe#InvalidParameterException":
      response = await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.wesley.fe#ResourceInUseException":
      response = await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.wesley.fe#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.wesley.fe#ServerException":
      response = await deserializeAws_restJson1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.wesley.fe#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.wesley.fe#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeClusterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DescribeClusterCommandError(
      output,
      context
    );
  }
  const contents: DescribeClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeClusterResponse",
    cluster: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.cluster !== undefined) {
    contents.cluster = deserializeAws_restJson1_1Cluster(data.cluster, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeClusterCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.wesley.fe#ClientException":
      response = await deserializeAws_restJson1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.wesley.fe#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.wesley.fe#ServerException":
      response = await deserializeAws_restJson1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.wesley.fe#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.wesley.fe#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeFargateProfileCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFargateProfileCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DescribeFargateProfileCommandError(
      output,
      context
    );
  }
  const contents: DescribeFargateProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeFargateProfileResponse",
    fargateProfile: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.fargateProfile !== undefined) {
    contents.fargateProfile = deserializeAws_restJson1_1FargateProfile(
      data.fargateProfile,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeFargateProfileCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFargateProfileCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.wesley.fe#ClientException":
      response = await deserializeAws_restJson1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.wesley.fe#InvalidParameterException":
      response = await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.wesley.fe#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.wesley.fe#ServerException":
      response = await deserializeAws_restJson1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.wesley.fe#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeNodegroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNodegroupCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DescribeNodegroupCommandError(
      output,
      context
    );
  }
  const contents: DescribeNodegroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeNodegroupResponse",
    nodegroup: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nodegroup !== undefined) {
    contents.nodegroup = deserializeAws_restJson1_1Nodegroup(
      data.nodegroup,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeNodegroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNodegroupCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.wesley.fe#ClientException":
      response = await deserializeAws_restJson1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.wesley.fe#InvalidParameterException":
      response = await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.wesley.fe#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.wesley.fe#ServerException":
      response = await deserializeAws_restJson1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.wesley.fe#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.wesley.fe#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeUpdateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUpdateCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DescribeUpdateCommandError(
      output,
      context
    );
  }
  const contents: DescribeUpdateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeUpdateResponse",
    update: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.update !== undefined) {
    contents.update = deserializeAws_restJson1_1Update(data.update, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeUpdateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUpdateCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.wesley.fe#ClientException":
      response = await deserializeAws_restJson1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.wesley.fe#InvalidParameterException":
      response = await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.wesley.fe#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.wesley.fe#ServerException":
      response = await deserializeAws_restJson1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.wesley.fe#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListClustersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListClustersCommandError(output, context);
  }
  const contents: ListClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListClustersResponse",
    clusters: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusters !== undefined) {
    contents.clusters = deserializeAws_restJson1_1StringList(
      data.clusters,
      context
    );
  }
  if (data.nextToken !== undefined) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListClustersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.wesley.fe#ClientException":
      response = await deserializeAws_restJson1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.wesley.fe#InvalidParameterException":
      response = await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.wesley.fe#ServerException":
      response = await deserializeAws_restJson1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.wesley.fe#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.wesley.fe#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListFargateProfilesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFargateProfilesCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListFargateProfilesCommandError(
      output,
      context
    );
  }
  const contents: ListFargateProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListFargateProfilesResponse",
    fargateProfileNames: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.fargateProfileNames !== undefined) {
    contents.fargateProfileNames = deserializeAws_restJson1_1StringList(
      data.fargateProfileNames,
      context
    );
  }
  if (data.nextToken !== undefined) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListFargateProfilesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFargateProfilesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.wesley.fe#ClientException":
      response = await deserializeAws_restJson1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.wesley.fe#InvalidParameterException":
      response = await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.wesley.fe#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.wesley.fe#ServerException":
      response = await deserializeAws_restJson1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.wesley.fe#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListNodegroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodegroupsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListNodegroupsCommandError(
      output,
      context
    );
  }
  const contents: ListNodegroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListNodegroupsResponse",
    nextToken: undefined,
    nodegroups: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined) {
    contents.nextToken = data.nextToken;
  }
  if (data.nodegroups !== undefined) {
    contents.nodegroups = deserializeAws_restJson1_1StringList(
      data.nodegroups,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListNodegroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodegroupsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.wesley.fe#ClientException":
      response = await deserializeAws_restJson1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.wesley.fe#InvalidParameterException":
      response = await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.wesley.fe#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.wesley.fe#ServerException":
      response = await deserializeAws_restJson1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.wesley.fe#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.wesley.fe#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.tags !== undefined) {
    contents.tags = deserializeAws_restJson1_1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.wesley.fe#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.wesley.fe#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.wesley.fe#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListUpdatesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUpdatesCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListUpdatesCommandError(output, context);
  }
  const contents: ListUpdatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListUpdatesResponse",
    nextToken: undefined,
    updateIds: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined) {
    contents.nextToken = data.nextToken;
  }
  if (data.updateIds !== undefined) {
    contents.updateIds = deserializeAws_restJson1_1StringList(
      data.updateIds,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListUpdatesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUpdatesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.wesley.fe#ClientException":
      response = await deserializeAws_restJson1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.wesley.fe#InvalidParameterException":
      response = await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.wesley.fe#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.wesley.fe#ServerException":
      response = await deserializeAws_restJson1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.wesley.fe#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.wesley.fe#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.wesley.fe#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.wesley.fe#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.wesley.fe#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.wesley.fe#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.wesley.fe#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateClusterConfigCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterConfigCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UpdateClusterConfigCommandError(
      output,
      context
    );
  }
  const contents: UpdateClusterConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateClusterConfigResponse",
    update: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.update !== undefined) {
    contents.update = deserializeAws_restJson1_1Update(data.update, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateClusterConfigCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterConfigCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.wesley.fe#ClientException":
      response = await deserializeAws_restJson1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.wesley.fe#InvalidParameterException":
      response = await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.wesley.fe#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.wesley.fe#ResourceInUseException":
      response = await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.wesley.fe#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.wesley.fe#ServerException":
      response = await deserializeAws_restJson1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.wesley.fe#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateClusterVersionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterVersionCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UpdateClusterVersionCommandError(
      output,
      context
    );
  }
  const contents: UpdateClusterVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateClusterVersionResponse",
    update: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.update !== undefined) {
    contents.update = deserializeAws_restJson1_1Update(data.update, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateClusterVersionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterVersionCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.wesley.fe#ClientException":
      response = await deserializeAws_restJson1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.wesley.fe#InvalidParameterException":
      response = await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.wesley.fe#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.wesley.fe#ResourceInUseException":
      response = await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.wesley.fe#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.wesley.fe#ServerException":
      response = await deserializeAws_restJson1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.wesley.fe#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateNodegroupConfigCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNodegroupConfigCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UpdateNodegroupConfigCommandError(
      output,
      context
    );
  }
  const contents: UpdateNodegroupConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateNodegroupConfigResponse",
    update: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.update !== undefined) {
    contents.update = deserializeAws_restJson1_1Update(data.update, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateNodegroupConfigCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNodegroupConfigCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.wesley.fe#ClientException":
      response = await deserializeAws_restJson1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.wesley.fe#InvalidParameterException":
      response = await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.wesley.fe#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.wesley.fe#ResourceInUseException":
      response = await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.wesley.fe#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.wesley.fe#ServerException":
      response = await deserializeAws_restJson1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.wesley.fe#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateNodegroupVersionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNodegroupVersionCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UpdateNodegroupVersionCommandError(
      output,
      context
    );
  }
  const contents: UpdateNodegroupVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateNodegroupVersionResponse",
    update: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.update !== undefined) {
    contents.update = deserializeAws_restJson1_1Update(data.update, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateNodegroupVersionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNodegroupVersionCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.wesley.fe#ClientException":
      response = await deserializeAws_restJson1_1ClientExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazonaws.wesley.fe#InvalidParameterException":
      response = await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.wesley.fe#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.wesley.fe#ResourceInUseException":
      response = await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.wesley.fe#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServerException":
    case "com.amazonaws.wesley.fe#ServerException":
      response = await deserializeAws_restJson1_1ServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.wesley.fe#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_restJson1_1BadRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    __type: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ClientExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ClientException> => {
  const contents: ClientException = {
    __type: "ClientException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    clusterName: undefined,
    message: undefined,
    nodegroupName: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterName !== undefined) {
    contents.clusterName = data.clusterName;
  }
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  if (data.nodegroupName !== undefined) {
    contents.nodegroupName = data.nodegroupName;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidParameterExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const contents: InvalidParameterException = {
    __type: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    clusterName: undefined,
    fargateProfileName: undefined,
    message: undefined,
    nodegroupName: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterName !== undefined) {
    contents.clusterName = data.clusterName;
  }
  if (data.fargateProfileName !== undefined) {
    contents.fargateProfileName = data.fargateProfileName;
  }
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  if (data.nodegroupName !== undefined) {
    contents.nodegroupName = data.nodegroupName;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    __type: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    clusterName: undefined,
    message: undefined,
    nodegroupName: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterName !== undefined) {
    contents.clusterName = data.clusterName;
  }
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  if (data.nodegroupName !== undefined) {
    contents.nodegroupName = data.nodegroupName;
  }
  return contents;
};

const deserializeAws_restJson1_1NotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    __type: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceInUseExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: ResourceInUseException = {
    __type: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    clusterName: undefined,
    message: undefined,
    nodegroupName: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterName !== undefined) {
    contents.clusterName = data.clusterName;
  }
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  if (data.nodegroupName !== undefined) {
    contents.nodegroupName = data.nodegroupName;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceLimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceLimitExceededException> => {
  const contents: ResourceLimitExceededException = {
    __type: "ResourceLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    clusterName: undefined,
    message: undefined,
    nodegroupName: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterName !== undefined) {
    contents.clusterName = data.clusterName;
  }
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  if (data.nodegroupName !== undefined) {
    contents.nodegroupName = data.nodegroupName;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    __type: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    clusterName: undefined,
    fargateProfileName: undefined,
    message: undefined,
    nodegroupName: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterName !== undefined) {
    contents.clusterName = data.clusterName;
  }
  if (data.fargateProfileName !== undefined) {
    contents.fargateProfileName = data.fargateProfileName;
  }
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  if (data.nodegroupName !== undefined) {
    contents.nodegroupName = data.nodegroupName;
  }
  return contents;
};

const deserializeAws_restJson1_1ServerExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServerException> => {
  const contents: ServerException = {
    __type: "ServerException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    clusterName: undefined,
    message: undefined,
    nodegroupName: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterName !== undefined) {
    contents.clusterName = data.clusterName;
  }
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  if (data.nodegroupName !== undefined) {
    contents.nodegroupName = data.nodegroupName;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceUnavailableExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    __type: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1UnsupportedAvailabilityZoneExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnsupportedAvailabilityZoneException> => {
  const contents: UnsupportedAvailabilityZoneException = {
    __type: "UnsupportedAvailabilityZoneException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    clusterName: undefined,
    message: undefined,
    nodegroupName: undefined,
    validZones: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterName !== undefined) {
    contents.clusterName = data.clusterName;
  }
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  if (data.nodegroupName !== undefined) {
    contents.nodegroupName = data.nodegroupName;
  }
  if (data.validZones !== undefined) {
    contents.validZones = deserializeAws_restJson1_1StringList(
      data.validZones,
      context
    );
  }
  return contents;
};

const serializeAws_restJson1_1FargateProfileLabel = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1FargateProfileSelector = (
  input: FargateProfileSelector,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.labels !== undefined) {
    bodyParams["labels"] = serializeAws_restJson1_1FargateProfileLabel(
      input.labels,
      context
    );
  }
  if (input.namespace !== undefined) {
    bodyParams["namespace"] = input.namespace;
  }
  return bodyParams;
};

const serializeAws_restJson1_1FargateProfileSelectors = (
  input: Array<FargateProfileSelector>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1FargateProfileSelector(entry, context)
  );
};

const serializeAws_restJson1_1LogSetup = (
  input: LogSetup,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.enabled !== undefined) {
    bodyParams["enabled"] = input.enabled;
  }
  if (input.types !== undefined) {
    bodyParams["types"] = serializeAws_restJson1_1LogTypes(
      input.types,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1LogSetups = (
  input: Array<LogSetup>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1LogSetup(entry, context)
  );
};

const serializeAws_restJson1_1LogTypes = (
  input: Array<LogType | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_restJson1_1Logging = (
  input: Logging,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.clusterLogging !== undefined) {
    bodyParams["clusterLogging"] = serializeAws_restJson1_1LogSetups(
      input.clusterLogging,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1NodegroupScalingConfig = (
  input: NodegroupScalingConfig,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.desiredSize !== undefined) {
    bodyParams["desiredSize"] = input.desiredSize;
  }
  if (input.maxSize !== undefined) {
    bodyParams["maxSize"] = input.maxSize;
  }
  if (input.minSize !== undefined) {
    bodyParams["minSize"] = input.minSize;
  }
  return bodyParams;
};

const serializeAws_restJson1_1RemoteAccessConfig = (
  input: RemoteAccessConfig,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ec2SshKey !== undefined) {
    bodyParams["ec2SshKey"] = input.ec2SshKey;
  }
  if (input.sourceSecurityGroups !== undefined) {
    bodyParams["sourceSecurityGroups"] = serializeAws_restJson1_1StringList(
      input.sourceSecurityGroups,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1StringList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_restJson1_1TagMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1UpdateLabelsPayload = (
  input: UpdateLabelsPayload,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.addOrUpdateLabels !== undefined) {
    bodyParams["addOrUpdateLabels"] = serializeAws_restJson1_1labelsMap(
      input.addOrUpdateLabels,
      context
    );
  }
  if (input.removeLabels !== undefined) {
    bodyParams["removeLabels"] = serializeAws_restJson1_1labelsKeyList(
      input.removeLabels,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1VpcConfigRequest = (
  input: VpcConfigRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.endpointPrivateAccess !== undefined) {
    bodyParams["endpointPrivateAccess"] = input.endpointPrivateAccess;
  }
  if (input.endpointPublicAccess !== undefined) {
    bodyParams["endpointPublicAccess"] = input.endpointPublicAccess;
  }
  if (input.securityGroupIds !== undefined) {
    bodyParams["securityGroupIds"] = serializeAws_restJson1_1StringList(
      input.securityGroupIds,
      context
    );
  }
  if (input.subnetIds !== undefined) {
    bodyParams["subnetIds"] = serializeAws_restJson1_1StringList(
      input.subnetIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1labelsKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_restJson1_1labelsMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1AutoScalingGroup = (
  output: any,
  context: __SerdeContext
): AutoScalingGroup => {
  let contents: any = {
    __type: "AutoScalingGroup",
    name: undefined
  };
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_restJson1_1AutoScalingGroupList = (
  output: any,
  context: __SerdeContext
): Array<AutoScalingGroup> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1AutoScalingGroup(entry, context)
  );
};

const deserializeAws_restJson1_1Certificate = (
  output: any,
  context: __SerdeContext
): Certificate => {
  let contents: any = {
    __type: "Certificate",
    data: undefined
  };
  if (output.data !== undefined) {
    contents.data = output.data;
  }
  return contents;
};

const deserializeAws_restJson1_1Cluster = (
  output: any,
  context: __SerdeContext
): Cluster => {
  let contents: any = {
    __type: "Cluster",
    arn: undefined,
    certificateAuthority: undefined,
    clientRequestToken: undefined,
    createdAt: undefined,
    endpoint: undefined,
    identity: undefined,
    logging: undefined,
    name: undefined,
    platformVersion: undefined,
    resourcesVpcConfig: undefined,
    roleArn: undefined,
    status: undefined,
    tags: undefined,
    version: undefined
  };
  if (output.arn !== undefined) {
    contents.arn = output.arn;
  }
  if (output.certificateAuthority !== undefined) {
    contents.certificateAuthority = deserializeAws_restJson1_1Certificate(
      output.certificateAuthority,
      context
    );
  }
  if (output.clientRequestToken !== undefined) {
    contents.clientRequestToken = output.clientRequestToken;
  }
  if (output.createdAt !== undefined) {
    contents.createdAt = new Date(
      output.createdAt % 1 != 0
        ? Math.round(output.createdAt * 1000)
        : output.createdAt
    );
  }
  if (output.endpoint !== undefined) {
    contents.endpoint = output.endpoint;
  }
  if (output.identity !== undefined) {
    contents.identity = deserializeAws_restJson1_1Identity(
      output.identity,
      context
    );
  }
  if (output.logging !== undefined) {
    contents.logging = deserializeAws_restJson1_1Logging(
      output.logging,
      context
    );
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.platformVersion !== undefined) {
    contents.platformVersion = output.platformVersion;
  }
  if (output.resourcesVpcConfig !== undefined) {
    contents.resourcesVpcConfig = deserializeAws_restJson1_1VpcConfigResponse(
      output.resourcesVpcConfig,
      context
    );
  }
  if (output.roleArn !== undefined) {
    contents.roleArn = output.roleArn;
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.tags !== undefined) {
    contents.tags = deserializeAws_restJson1_1TagMap(output.tags, context);
  }
  if (output.version !== undefined) {
    contents.version = output.version;
  }
  return contents;
};

const deserializeAws_restJson1_1ErrorDetail = (
  output: any,
  context: __SerdeContext
): ErrorDetail => {
  let contents: any = {
    __type: "ErrorDetail",
    errorCode: undefined,
    errorMessage: undefined,
    resourceIds: undefined
  };
  if (output.errorCode !== undefined) {
    contents.errorCode = output.errorCode;
  }
  if (output.errorMessage !== undefined) {
    contents.errorMessage = output.errorMessage;
  }
  if (output.resourceIds !== undefined) {
    contents.resourceIds = deserializeAws_restJson1_1StringList(
      output.resourceIds,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ErrorDetails = (
  output: any,
  context: __SerdeContext
): Array<ErrorDetail> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ErrorDetail(entry, context)
  );
};

const deserializeAws_restJson1_1FargateProfile = (
  output: any,
  context: __SerdeContext
): FargateProfile => {
  let contents: any = {
    __type: "FargateProfile",
    clusterName: undefined,
    createdAt: undefined,
    fargateProfileArn: undefined,
    fargateProfileName: undefined,
    podExecutionRoleArn: undefined,
    selectors: undefined,
    status: undefined,
    subnets: undefined,
    tags: undefined
  };
  if (output.clusterName !== undefined) {
    contents.clusterName = output.clusterName;
  }
  if (output.createdAt !== undefined) {
    contents.createdAt = new Date(
      output.createdAt % 1 != 0
        ? Math.round(output.createdAt * 1000)
        : output.createdAt
    );
  }
  if (output.fargateProfileArn !== undefined) {
    contents.fargateProfileArn = output.fargateProfileArn;
  }
  if (output.fargateProfileName !== undefined) {
    contents.fargateProfileName = output.fargateProfileName;
  }
  if (output.podExecutionRoleArn !== undefined) {
    contents.podExecutionRoleArn = output.podExecutionRoleArn;
  }
  if (output.selectors !== undefined) {
    contents.selectors = deserializeAws_restJson1_1FargateProfileSelectors(
      output.selectors,
      context
    );
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.subnets !== undefined) {
    contents.subnets = deserializeAws_restJson1_1StringList(
      output.subnets,
      context
    );
  }
  if (output.tags !== undefined) {
    contents.tags = deserializeAws_restJson1_1TagMap(output.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1_1FargateProfileLabel = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1FargateProfileSelector = (
  output: any,
  context: __SerdeContext
): FargateProfileSelector => {
  let contents: any = {
    __type: "FargateProfileSelector",
    labels: undefined,
    namespace: undefined
  };
  if (output.labels !== undefined) {
    contents.labels = deserializeAws_restJson1_1FargateProfileLabel(
      output.labels,
      context
    );
  }
  if (output.namespace !== undefined) {
    contents.namespace = output.namespace;
  }
  return contents;
};

const deserializeAws_restJson1_1FargateProfileSelectors = (
  output: any,
  context: __SerdeContext
): Array<FargateProfileSelector> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1FargateProfileSelector(entry, context)
  );
};

const deserializeAws_restJson1_1Identity = (
  output: any,
  context: __SerdeContext
): Identity => {
  let contents: any = {
    __type: "Identity",
    oidc: undefined
  };
  if (output.oidc !== undefined) {
    contents.oidc = deserializeAws_restJson1_1OIDC(output.oidc, context);
  }
  return contents;
};

const deserializeAws_restJson1_1Issue = (
  output: any,
  context: __SerdeContext
): Issue => {
  let contents: any = {
    __type: "Issue",
    code: undefined,
    message: undefined,
    resourceIds: undefined
  };
  if (output.code !== undefined) {
    contents.code = output.code;
  }
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  if (output.resourceIds !== undefined) {
    contents.resourceIds = deserializeAws_restJson1_1StringList(
      output.resourceIds,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1IssueList = (
  output: any,
  context: __SerdeContext
): Array<Issue> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Issue(entry, context)
  );
};

const deserializeAws_restJson1_1LogSetup = (
  output: any,
  context: __SerdeContext
): LogSetup => {
  let contents: any = {
    __type: "LogSetup",
    enabled: undefined,
    types: undefined
  };
  if (output.enabled !== undefined) {
    contents.enabled = output.enabled;
  }
  if (output.types !== undefined) {
    contents.types = deserializeAws_restJson1_1LogTypes(output.types, context);
  }
  return contents;
};

const deserializeAws_restJson1_1LogSetups = (
  output: any,
  context: __SerdeContext
): Array<LogSetup> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1LogSetup(entry, context)
  );
};

const deserializeAws_restJson1_1LogTypes = (
  output: any,
  context: __SerdeContext
): Array<LogType | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1Logging = (
  output: any,
  context: __SerdeContext
): Logging => {
  let contents: any = {
    __type: "Logging",
    clusterLogging: undefined
  };
  if (output.clusterLogging !== undefined) {
    contents.clusterLogging = deserializeAws_restJson1_1LogSetups(
      output.clusterLogging,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1Nodegroup = (
  output: any,
  context: __SerdeContext
): Nodegroup => {
  let contents: any = {
    __type: "Nodegroup",
    amiType: undefined,
    clusterName: undefined,
    createdAt: undefined,
    diskSize: undefined,
    health: undefined,
    instanceTypes: undefined,
    labels: undefined,
    modifiedAt: undefined,
    nodeRole: undefined,
    nodegroupArn: undefined,
    nodegroupName: undefined,
    releaseVersion: undefined,
    remoteAccess: undefined,
    resources: undefined,
    scalingConfig: undefined,
    status: undefined,
    subnets: undefined,
    tags: undefined,
    version: undefined
  };
  if (output.amiType !== undefined) {
    contents.amiType = output.amiType;
  }
  if (output.clusterName !== undefined) {
    contents.clusterName = output.clusterName;
  }
  if (output.createdAt !== undefined) {
    contents.createdAt = new Date(
      output.createdAt % 1 != 0
        ? Math.round(output.createdAt * 1000)
        : output.createdAt
    );
  }
  if (output.diskSize !== undefined) {
    contents.diskSize = output.diskSize;
  }
  if (output.health !== undefined) {
    contents.health = deserializeAws_restJson1_1NodegroupHealth(
      output.health,
      context
    );
  }
  if (output.instanceTypes !== undefined) {
    contents.instanceTypes = deserializeAws_restJson1_1StringList(
      output.instanceTypes,
      context
    );
  }
  if (output.labels !== undefined) {
    contents.labels = deserializeAws_restJson1_1labelsMap(
      output.labels,
      context
    );
  }
  if (output.modifiedAt !== undefined) {
    contents.modifiedAt = new Date(
      output.modifiedAt % 1 != 0
        ? Math.round(output.modifiedAt * 1000)
        : output.modifiedAt
    );
  }
  if (output.nodeRole !== undefined) {
    contents.nodeRole = output.nodeRole;
  }
  if (output.nodegroupArn !== undefined) {
    contents.nodegroupArn = output.nodegroupArn;
  }
  if (output.nodegroupName !== undefined) {
    contents.nodegroupName = output.nodegroupName;
  }
  if (output.releaseVersion !== undefined) {
    contents.releaseVersion = output.releaseVersion;
  }
  if (output.remoteAccess !== undefined) {
    contents.remoteAccess = deserializeAws_restJson1_1RemoteAccessConfig(
      output.remoteAccess,
      context
    );
  }
  if (output.resources !== undefined) {
    contents.resources = deserializeAws_restJson1_1NodegroupResources(
      output.resources,
      context
    );
  }
  if (output.scalingConfig !== undefined) {
    contents.scalingConfig = deserializeAws_restJson1_1NodegroupScalingConfig(
      output.scalingConfig,
      context
    );
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.subnets !== undefined) {
    contents.subnets = deserializeAws_restJson1_1StringList(
      output.subnets,
      context
    );
  }
  if (output.tags !== undefined) {
    contents.tags = deserializeAws_restJson1_1TagMap(output.tags, context);
  }
  if (output.version !== undefined) {
    contents.version = output.version;
  }
  return contents;
};

const deserializeAws_restJson1_1NodegroupHealth = (
  output: any,
  context: __SerdeContext
): NodegroupHealth => {
  let contents: any = {
    __type: "NodegroupHealth",
    issues: undefined
  };
  if (output.issues !== undefined) {
    contents.issues = deserializeAws_restJson1_1IssueList(
      output.issues,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1NodegroupResources = (
  output: any,
  context: __SerdeContext
): NodegroupResources => {
  let contents: any = {
    __type: "NodegroupResources",
    autoScalingGroups: undefined,
    remoteAccessSecurityGroup: undefined
  };
  if (output.autoScalingGroups !== undefined) {
    contents.autoScalingGroups = deserializeAws_restJson1_1AutoScalingGroupList(
      output.autoScalingGroups,
      context
    );
  }
  if (output.remoteAccessSecurityGroup !== undefined) {
    contents.remoteAccessSecurityGroup = output.remoteAccessSecurityGroup;
  }
  return contents;
};

const deserializeAws_restJson1_1NodegroupScalingConfig = (
  output: any,
  context: __SerdeContext
): NodegroupScalingConfig => {
  let contents: any = {
    __type: "NodegroupScalingConfig",
    desiredSize: undefined,
    maxSize: undefined,
    minSize: undefined
  };
  if (output.desiredSize !== undefined) {
    contents.desiredSize = output.desiredSize;
  }
  if (output.maxSize !== undefined) {
    contents.maxSize = output.maxSize;
  }
  if (output.minSize !== undefined) {
    contents.minSize = output.minSize;
  }
  return contents;
};

const deserializeAws_restJson1_1OIDC = (
  output: any,
  context: __SerdeContext
): OIDC => {
  let contents: any = {
    __type: "OIDC",
    issuer: undefined
  };
  if (output.issuer !== undefined) {
    contents.issuer = output.issuer;
  }
  return contents;
};

const deserializeAws_restJson1_1RemoteAccessConfig = (
  output: any,
  context: __SerdeContext
): RemoteAccessConfig => {
  let contents: any = {
    __type: "RemoteAccessConfig",
    ec2SshKey: undefined,
    sourceSecurityGroups: undefined
  };
  if (output.ec2SshKey !== undefined) {
    contents.ec2SshKey = output.ec2SshKey;
  }
  if (output.sourceSecurityGroups !== undefined) {
    contents.sourceSecurityGroups = deserializeAws_restJson1_1StringList(
      output.sourceSecurityGroups,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1StringList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1TagMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1Update = (
  output: any,
  context: __SerdeContext
): Update => {
  let contents: any = {
    __type: "Update",
    createdAt: undefined,
    errors: undefined,
    id: undefined,
    params: undefined,
    status: undefined,
    type: undefined
  };
  if (output.createdAt !== undefined) {
    contents.createdAt = new Date(
      output.createdAt % 1 != 0
        ? Math.round(output.createdAt * 1000)
        : output.createdAt
    );
  }
  if (output.errors !== undefined) {
    contents.errors = deserializeAws_restJson1_1ErrorDetails(
      output.errors,
      context
    );
  }
  if (output.id !== undefined) {
    contents.id = output.id;
  }
  if (output.params !== undefined) {
    contents.params = deserializeAws_restJson1_1UpdateParams(
      output.params,
      context
    );
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.type !== undefined) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_restJson1_1UpdateParam = (
  output: any,
  context: __SerdeContext
): UpdateParam => {
  let contents: any = {
    __type: "UpdateParam",
    type: undefined,
    value: undefined
  };
  if (output.type !== undefined) {
    contents.type = output.type;
  }
  if (output.value !== undefined) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_restJson1_1UpdateParams = (
  output: any,
  context: __SerdeContext
): Array<UpdateParam> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1UpdateParam(entry, context)
  );
};

const deserializeAws_restJson1_1VpcConfigResponse = (
  output: any,
  context: __SerdeContext
): VpcConfigResponse => {
  let contents: any = {
    __type: "VpcConfigResponse",
    clusterSecurityGroupId: undefined,
    endpointPrivateAccess: undefined,
    endpointPublicAccess: undefined,
    securityGroupIds: undefined,
    subnetIds: undefined,
    vpcId: undefined
  };
  if (output.clusterSecurityGroupId !== undefined) {
    contents.clusterSecurityGroupId = output.clusterSecurityGroupId;
  }
  if (output.endpointPrivateAccess !== undefined) {
    contents.endpointPrivateAccess = output.endpointPrivateAccess;
  }
  if (output.endpointPublicAccess !== undefined) {
    contents.endpointPublicAccess = output.endpointPublicAccess;
  }
  if (output.securityGroupIds !== undefined) {
    contents.securityGroupIds = deserializeAws_restJson1_1StringList(
      output.securityGroupIds,
      context
    );
  }
  if (output.subnetIds !== undefined) {
    contents.subnetIds = deserializeAws_restJson1_1StringList(
      output.subnetIds,
      context
    );
  }
  if (output.vpcId !== undefined) {
    contents.vpcId = output.vpcId;
  }
  return contents;
};

const deserializeAws_restJson1_1labelsMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};