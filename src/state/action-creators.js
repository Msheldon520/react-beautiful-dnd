// @flow
import type { Position } from 'css-box-model';
import type {
  Critical,
  DraggableId,
  DroppableId,
  DropResult,
  MovementMode,
  Viewport,
  DimensionMap,
  DropReason,
  PendingDrop,
  Published,
} from '../types';

export type LiftArgs = {|
  // lifting with DraggableId rather than descriptor
  // as the descriptor might change after a drop is flushed
  id: DraggableId,
  clientSelection: Position,
  movementMode: MovementMode,
|};

export type LiftAction = {|
  type: 'LIFT',
  payload: LiftArgs,
|};

export const lift = (args: LiftArgs): LiftAction => ({
  type: 'LIFT',
  payload: args,
});

export type InitialPublishArgs = {|
  critical: Critical,
  dimensions: DimensionMap,
  clientSelection: Position,
  viewport: Viewport,
  movementMode: MovementMode,
|};

export type InitialPublishAction = {|
  type: 'INITIAL_PUBLISH',
  payload: InitialPublishArgs,
|};

export const initialPublish = (
  args: InitialPublishArgs,
): InitialPublishAction => ({
  type: 'INITIAL_PUBLISH',
  payload: args,
});

export type WhileDraggingPublishAction = {|
  type: 'PUBLISH_WHILE_DRAGGING',
  payload: Published,
|};

export const publishWhileDragging = (
  args: Published,
): WhileDraggingPublishAction => ({
  type: 'PUBLISH_WHILE_DRAGGING',
  payload: args,
});

export type CollectionStartingAction = {|
  type: 'COLLECTION_STARTING',
  payload: null,
|};

export const collectionStarting = (): CollectionStartingAction => ({
  type: 'COLLECTION_STARTING',
  payload: null,
});

export type UpdateDroppableScrollArgs = {
  id: DroppableId,
  offset: Position,
};

export type UpdateDroppableScrollAction = {|
  type: 'UPDATE_DROPPABLE_SCROLL',
  payload: UpdateDroppableScrollArgs,
|};

export const updateDroppableScroll = (
  args: UpdateDroppableScrollArgs,
): UpdateDroppableScrollAction => ({
  type: 'UPDATE_DROPPABLE_SCROLL',
  payload: args,
});

export type UpdateDroppableIsEnabledArgs = {|
  id: DroppableId,
  isEnabled: boolean,
|};

export type UpdateDroppableIsEnabledAction = {|
  type: 'UPDATE_DROPPABLE_IS_ENABLED',
  payload: UpdateDroppableIsEnabledArgs,
|};

export const updateDroppableIsEnabled = (
  args: UpdateDroppableIsEnabledArgs,
): UpdateDroppableIsEnabledAction => ({
  type: 'UPDATE_DROPPABLE_IS_ENABLED',
  payload: args,
});

export type UpdateDroppableIsCombineEnabledArgs = {|
  id: DroppableId,
  isCombineEnabled: boolean,
|};

export type UpdateDroppableIsCombineEnabledAction = {|
  type: 'UPDATE_DROPPABLE_IS_COMBINE_ENABLED',
  payload: UpdateDroppableIsCombineEnabledArgs,
|};

export const updateDroppableIsCombineEnabled = (
  args: UpdateDroppableIsCombineEnabledArgs,
): UpdateDroppableIsCombineEnabledAction => ({
  type: 'UPDATE_DROPPABLE_IS_COMBINE_ENABLED',
  payload: args,
});

export type MoveArgs = {|
  client: Position,
|};

export type MoveAction = {|
  type: 'MOVE',
  payload: MoveArgs,
|};

export const move = (args: MoveArgs): MoveAction => ({
  type: 'MOVE',
  payload: args,
});

type MoveByWindowScrollArgs = {|
  newScroll: Position,
|};

export type MoveByWindowScrollAction = {|
  type: 'MOVE_BY_WINDOW_SCROLL',
  payload: MoveByWindowScrollArgs,
|};

export const moveByWindowScroll = (
  args: MoveByWindowScrollArgs,
): MoveByWindowScrollAction => ({
  type: 'MOVE_BY_WINDOW_SCROLL',
  payload: args,
});

export type UpdateViewportMaxScrollArgs = {|
  maxScroll: Position,
|};

type UpdateViewportMaxScrollAction = {|
  type: 'UPDATE_VIEWPORT_MAX_SCROLL',
  payload: UpdateViewportMaxScrollArgs,
|};

export const updateViewportMaxScroll = (
  args: UpdateViewportMaxScrollArgs,
): UpdateViewportMaxScrollAction => ({
  type: 'UPDATE_VIEWPORT_MAX_SCROLL',
  payload: args,
});

// type PostJumpScrollAction = {|
//   type: 'POST_JUMP_SCROLL',
//   payload: null,
// |};

// export const postJumpScroll = (): PostJumpScrollAction => ({
//   type: 'POST_JUMP_SCROLL',
//   payload: null,
// });

// type PostSnapDestinationChangeAction = {|
//   type: 'POST_SNAP_DESTINATION_CHANGE',
//   payload: null,
// |};

// export const postSnapDestinationChange = (): PostSnapDestinationChangeAction => ({
//   type: 'POST_SNAP_DESTINATION_CHANGE',
//   payload: null,
// });

export type MoveUpAction = {|
  type: 'MOVE_UP',
  payload: null,
|};

export const moveUp = (): MoveUpAction => ({
  type: 'MOVE_UP',
  payload: null,
});

export type MoveDownAction = {|
  type: 'MOVE_DOWN',
  payload: null,
|};

export const moveDown = (): MoveDownAction => ({
  type: 'MOVE_DOWN',
  payload: null,
});

export type MoveRightAction = {|
  type: 'MOVE_RIGHT',
  payload: null,
|};

export const moveRight = (): MoveRightAction => ({
  type: 'MOVE_RIGHT',
  payload: null,
});

export type MoveLeftAction = {|
  type: 'MOVE_LEFT',
  payload: null,
|};

export const moveLeft = (): MoveLeftAction => ({
  type: 'MOVE_LEFT',
  payload: null,
});

type CleanAction = {|
  type: 'CLEAN',
  payload: null,
|};

export const clean = (): CleanAction => ({
  type: 'CLEAN',
  payload: null,
});

export type DropAnimateAction = {
  type: 'DROP_ANIMATE',
  payload: PendingDrop,
};

export const animateDrop = (pending: PendingDrop): DropAnimateAction => ({
  type: 'DROP_ANIMATE',
  payload: pending,
});

export type DropCompleteAction = {
  type: 'DROP_COMPLETE',
  payload: DropResult,
};

export const completeDrop = (result: DropResult): DropCompleteAction => ({
  type: 'DROP_COMPLETE',
  payload: result,
});

type DropArgs = {|
  reason: DropReason,
|};

export type DropAction = {|
  type: 'DROP',
  payload: DropArgs,
|};

export const drop = (args: DropArgs) => ({
  type: 'DROP',
  payload: args,
});

export const cancel = () => drop({ reason: 'CANCEL' });

export type DropPendingAction = {|
  type: 'DROP_PENDING',
  payload: DropArgs,
|};

export const dropPending = (args: DropArgs): DropPendingAction => ({
  type: 'DROP_PENDING',
  payload: args,
});

export type DropAnimationFinishedAction = {|
  type: 'DROP_ANIMATION_FINISHED',
  payload: null,
|};

export const dropAnimationFinished = (): DropAnimationFinishedAction => ({
  type: 'DROP_ANIMATION_FINISHED',
  payload: null,
});

export type Action =
  | LiftAction
  | InitialPublishAction
  | WhileDraggingPublishAction
  | CollectionStartingAction
  | UpdateDroppableScrollAction
  | UpdateDroppableIsEnabledAction
  | UpdateDroppableIsCombineEnabledAction
  | MoveByWindowScrollAction
  | UpdateViewportMaxScrollAction
  // | PostJumpScrollAction
  // | PostSnapDestinationChangeAction
  | MoveAction
  | MoveUpAction
  | MoveDownAction
  | MoveRightAction
  | MoveLeftAction
  | DropPendingAction
  | DropAction
  | DropAnimateAction
  | DropAnimationFinishedAction
  | DropCompleteAction
  | CleanAction;
