import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ISO8601DateTime: { input: string; output: string; }
};

/** Autogenerated input type of CreateList */
export type CreateListInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** やりたいことリストの項目 */
  items: Array<Scalars['String']['input']>;
};

/** Autogenerated return type of CreateList. */
export type CreateListPayload = {
  __typename?: 'CreateListPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** 作成したやりたいことリスト情報 */
  list: List;
};

/** やりたいことリストの項目 */
export type Item = {
  __typename?: 'Item';
  /** 完了日時 */
  doneAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /** やりたいことリスト */
  list: List;
  /** やりたいこと */
  name: Scalars['String']['output'];
  /** リスト番号 */
  number: Scalars['Int']['output'];
};

/** やりたいことリスト */
export type List = {
  __typename?: 'List';
  /** やりたいことリストの項目 */
  items: Array<Item>;
  /** 公開状態 */
  published: Scalars['Boolean']['output'];
  /** リストタイトル */
  title: Scalars['String']['output'];
  /** ユーザー */
  user: User;
  /** やりたいことリストID */
  uuid: Scalars['String']['output'];
};

/** MutationType */
export type Mutation = {
  __typename?: 'Mutation';
  /**
   * やりたいことリストを作成する。
   *
   */
  createList?: Maybe<CreateListPayload>;
  /**
   * やりたいことリストを更新する。
   *
   */
  updateList?: Maybe<UpdateListPayload>;
  /**
   * やりたいことリスト項目を追加・更新する。
   *
   */
  upsertItem?: Maybe<UpsertItemPayload>;
};


/** MutationType */
export type MutationCreateListArgs = {
  input: CreateListInput;
};


/** MutationType */
export type MutationUpdateListArgs = {
  input: UpdateListInput;
};


/** MutationType */
export type MutationUpsertItemArgs = {
  input: UpsertItemInput;
};

export type Query = {
  __typename?: 'Query';
  /** 最新のリスト情報 */
  currentList: List;
  /** ログインユーザー情報 */
  currentUser?: Maybe<User>;
};

/** Autogenerated input type of UpdateList */
export type UpdateListInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** 公開状態 */
  published: Scalars['Boolean']['input'];
  /** やりたいことリストID */
  uuid: Scalars['String']['input'];
};

/** Autogenerated return type of UpdateList. */
export type UpdateListPayload = {
  __typename?: 'UpdateListPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** 更新したやりたいことリスト情報 */
  list: List;
};

/** Autogenerated input type of UpsertItem */
export type UpsertItemInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** 完了日時 */
  doneAt?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  /** やりたいことリストID */
  listUuid: Scalars['String']['input'];
  /** やりたいこと */
  name?: InputMaybe<Scalars['String']['input']>;
  /** リスト番号 */
  number: Scalars['Int']['input'];
};

/** Autogenerated return type of UpsertItem. */
export type UpsertItemPayload = {
  __typename?: 'UpsertItemPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** 作成した項目 */
  item: Item;
};

/** ユーザー */
export type User = {
  __typename?: 'User';
  /** ユーザーID */
  id: Scalars['Int']['output'];
  /** ユーザー名 */
  name: Scalars['String']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateListInput: CreateListInput;
  CreateListPayload: ResolverTypeWrapper<CreateListPayload>;
  ISO8601DateTime: ResolverTypeWrapper<Scalars['ISO8601DateTime']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Item: ResolverTypeWrapper<Item>;
  List: ResolverTypeWrapper<List>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UpdateListInput: UpdateListInput;
  UpdateListPayload: ResolverTypeWrapper<UpdateListPayload>;
  UpsertItemInput: UpsertItemInput;
  UpsertItemPayload: ResolverTypeWrapper<UpsertItemPayload>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  CreateListInput: CreateListInput;
  CreateListPayload: CreateListPayload;
  ISO8601DateTime: Scalars['ISO8601DateTime']['output'];
  Int: Scalars['Int']['output'];
  Item: Item;
  List: List;
  Mutation: {};
  Query: {};
  String: Scalars['String']['output'];
  UpdateListInput: UpdateListInput;
  UpdateListPayload: UpdateListPayload;
  UpsertItemInput: UpsertItemInput;
  UpsertItemPayload: UpsertItemPayload;
  User: User;
};

export type OneOfDirectiveArgs = { };

export type OneOfDirectiveResolver<Result, Parent, ContextType = any, Args = OneOfDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CreateListPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateListPayload'] = ResolversParentTypes['CreateListPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  list?: Resolver<ResolversTypes['List'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface Iso8601DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ISO8601DateTime'], any> {
  name: 'ISO8601DateTime';
}

export type ItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = {
  doneAt?: Resolver<Maybe<ResolversTypes['ISO8601DateTime']>, ParentType, ContextType>;
  list?: Resolver<ResolversTypes['List'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListResolvers<ContextType = any, ParentType extends ResolversParentTypes['List'] = ResolversParentTypes['List']> = {
  items?: Resolver<Array<ResolversTypes['Item']>, ParentType, ContextType>;
  published?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  uuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createList?: Resolver<Maybe<ResolversTypes['CreateListPayload']>, ParentType, ContextType, RequireFields<MutationCreateListArgs, 'input'>>;
  updateList?: Resolver<Maybe<ResolversTypes['UpdateListPayload']>, ParentType, ContextType, RequireFields<MutationUpdateListArgs, 'input'>>;
  upsertItem?: Resolver<Maybe<ResolversTypes['UpsertItemPayload']>, ParentType, ContextType, RequireFields<MutationUpsertItemArgs, 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  currentList?: Resolver<ResolversTypes['List'], ParentType, ContextType>;
  currentUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
};

export type UpdateListPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateListPayload'] = ResolversParentTypes['UpdateListPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  list?: Resolver<ResolversTypes['List'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpsertItemPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpsertItemPayload'] = ResolversParentTypes['UpsertItemPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  item?: Resolver<ResolversTypes['Item'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  CreateListPayload?: CreateListPayloadResolvers<ContextType>;
  ISO8601DateTime?: GraphQLScalarType;
  Item?: ItemResolvers<ContextType>;
  List?: ListResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UpdateListPayload?: UpdateListPayloadResolvers<ContextType>;
  UpsertItemPayload?: UpsertItemPayloadResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  oneOf?: OneOfDirectiveResolver<any, any, ContextType>;
};
