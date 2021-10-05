import type { IDL } from "@dfinity/candid";
import {
    _SERVICE,
    ReplyContext,
    ChatSummaryUpdates,
    GroupChatSummaryUpdates,
    DirectChatSummaryUpdates,
    DirectChatEventWrapper,
    CreateGroupArgs,
    CreateGroupResponse,
    UpdatesArgs,
    UpdatesResponse,
    ChatSummary,
    GroupChatSummary,
    DirectChatSummary,
    Message,
    DirectChatEvent,
    UserId,
    MessageContent,
    FileContent,
    TextContent,
    ImageContent,
    VideoContent,
    AudioContent,
    CyclesContent,
    TimestampMillis,
    BlobReference,
    Participant,
    UpdatedChatSummary,
    EventIndex,
    EventWrapper,
    EventsByIndexArgs,
    EventsByIndexResponse,
    EventsResponse,
    EventsSuccessResult,
    EventsArgs,
    PutChunkArgs,
    PutChunkResponse,
    SendMessageArgs,
    SendMessageResponse,
    EditMessageResponse,
    BlockUserResponse,
    UnblockUserResponse,
    LeaveGroupResponse,
    MarkReadResponse,
    SetAvatarResponse,
    ToggleReactionResponse,
    DeleteMessagesResponse,
    DeletedMessage,
    UpdatedMessage,
    JoinGroupResponse,
    SearchAllMessagesResponse,
    MessageMatch,
    AddWebRtcSessionDetailsResponse,
    WebRtcSessionDetailsEvent,
    WebRtcSessionDetails,
    WebRtcOffer,
    WebRtcAnswer,
    WebRtcEndpoint,
} from "./types";
export {
    _SERVICE as UserService,
    SendMessageArgs as ApiSendMessageArgs,
    SendMessageResponse as ApiSendMessageResponse,
    EditMessageResponse as ApiEditMessageResponse,
    Message as ApiMessage,
    ReplyContext as ApiReplyContext,
    ChatSummaryUpdates as ApiChatSummaryUpdates,
    GroupChatSummaryUpdates as ApiGroupChatSummaryUpdates,
    DirectChatSummaryUpdates as ApiDirectChatSummaryUpdates,
    CreateGroupArgs as ApiCreateGroupArgs,
    CreateGroupResponse as ApiCreateGroupResponse,
    UpdatesArgs as ApiUpdatesArgs,
    UpdatesResponse as ApiUpdatesResponse,
    ChatSummary as ApiChatSummary,
    DirectChatEvent as ApiDirectChatEvent,
    DirectChatEventWrapper as ApiDirectChatEventWrapper,
    GroupChatSummary as ApiGroupChatSummary,
    DirectChatSummary as ApiDirectChatSummary,
    UserId as ApiUserId,
    MessageContent as ApiMessageContent,
    FileContent as ApiFileContent,
    TextContent as ApiTextContent,
    ImageContent as ApiImageContent,
    VideoContent as ApiVideoContent,
    AudioContent as ApiAudioContent,
    CyclesContent as ApiCyclesContent,
    TimestampMillis as ApiTimestampMillis,
    BlobReference as ApiBlobReference,
    Participant as ApiParticipant,
    UpdatedChatSummary as ApiUpdatedChatSummary,
    EventIndex as ApiEventIndex,
    EventWrapper as ApiEventWrapper,
    EventsByIndexArgs as ApiEventsByIndexArgs,
    EventsByIndexResponse as ApiEventsByIndexResponse,
    EventsResponse as ApiEventsResponse,
    EventsSuccessResult as ApiEventsSuccessResult,
    EventsArgs as ApiEventsArgs,
    PutChunkArgs as ApiPutChunkArgs,
    PutChunkResponse as ApiPutChunkResponse,
    BlockUserResponse as ApiBlockUserResponse,
    UnblockUserResponse as ApiUnblockUserResponse,
    LeaveGroupResponse as ApiLeaveGroupResponse,
    MarkReadResponse as ApiMarkReadResponse,
    SetAvatarResponse as ApiSetAvatarResponse,
    ToggleReactionResponse as ApiToggleReactionResponse,
    DeleteMessagesResponse as ApiDeleteMessageResponse,
    DeletedMessage as ApiDeletedMessage,
    UpdatedMessage as ApiUpdatedMessage,
    JoinGroupResponse as ApiJoinGroupResponse,
    SearchAllMessagesResponse as ApiSearchAllMessagesResponse,
    MessageMatch as ApiMessageMatch,
    AddWebRtcSessionDetailsResponse as ApiAddWebRtcSessionDetailsResponse,
    WebRtcSessionDetailsEvent as ApiWebRtcSessionDetailsEvent,
    WebRtcSessionDetails as ApiWebRtcSessionDetails,
    WebRtcOffer as ApiWebRtcOffer,
    WebRtcAnswer as ApiWebRtcAnswer,
    WebRtcEndpoint as ApiWebRtcEndpoint,
};

export const idlFactory: IDL.InterfaceFactory;
