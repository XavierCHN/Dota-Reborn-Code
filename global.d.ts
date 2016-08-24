//made by 12548

declare var $ : $;
declare var GameEvents : CDOTA_PanoramaScript_GameEvents;
declare var GameUI : CDOTA_PanoramaScript_GameUI;
declare var CustomNetTables : CDOTA_PanoramaScript_CustomNetTables;
declare var Players : CScriptBindingPR_Players;
declare var Entities : CScriptBindingPR_Entities;
declare var Abilities : CScriptBindingPR_Abilities;
declare var Items : CScriptBindingPR_Items;
declare var Game : CScriptBindingPR_Game;

type js_raw_args = any;
type unknown_variant_type = any;
type js_value = any;
type js_object = Object;
type cstring = string;
type float = number;
type integer = number;
type unsigned = number;


interface CDOTA_PanoramaScript_GameEvents{
    /**
     * Subscribe to a game event
     */
    Subscribe( pEventName : cstring , funcVal : Function ) : integer
    /**
     * Unsubscribe from a game event
     */
    Unsubscribe( nCallbackHandle : integer ) 
    /**
     * Send a custom game event
     */
    SendCustomGameEventToServer( pEventName : cstring , eventArgs : Object )
    /**
     * Send a client-side event using gameeventmanager (only useful for a few specific events)
     */
    SendEventClientSide( pEventName : cstring , eventArgs : Object )

}

interface CDOTA_PanoramaScript_GameUI{

    /**
     *    Control whether the default UI is enabled
     */
    SetDefaultUIEnabled( nElementType : integer , bVisible : boolean ) : void
    /**
     *   Get the current UI configuration
     */
    CustomUIConfig() : Object
    /**
     *   Create a minimap ping at the given location
     */
    PingMinimapAtLocation( vec3 : Array<float> ) : void
    /**
     *    Install a mouse input filter
     */
    SetMouseCallback( callbackFn : Function ) : void
    /**
     *    
     */
    EnableAliMode( bEnable : boolean , nPort : integer ,  offsetVal : float , nScale : integer )
    /**
     *    Get the current mouse position.
     */
    GetCursorPosition() : Array<float>
    /**
     *   Return the entity index of the entity under the given screen position.
     */
    FindScreenEntities( screenLocVec2: Array<float> ) : Array<any>
    /**
     *   Get the world position of the screen position, or null if the cursor is out of the world.
     */
    GetScreenWorldPosition( screenLocVec2: Array<float> ) : Array<float>
    /**
     *    Install a mouse input filter
     */
    WasMousePressed( nButtonNum : integer ) : boolean
    /**
     *    Install a mouse input filter
     */
    WasMouseDoublePressed( nButtonNum : integer ) : boolean
    /**
     *    Install a mouse input filter
     */
    IsMouseDown( nButtonNum : integer ) : boolean
    /**
     *   Is the shift button pressed?
     */
    IsShiftDown() : boolean
    /**
     *   Is the alt button pressed?
     */
    IsAltDown() : boolean
    /**
     *   Is the control button pressed?
     */
    IsControlDown() : boolean
    /**
     *   Get the current UI click interaction mode.
     */
    GetClickBehaviors() : CLICK_BEHAVIORS
    /**
     *    Select a unit, adding it to the group or replacing the current selection.
     */
    SelectUnit( nEntityIndex : integer , bAddToGroup : boolean )
    /**
     *    Set the minimum camera pitch angle.
     */
    SetCameraPitchMin( flPitchMin : float ) : void
    /**
     *    Set the maximum camera pitch angle.
     */
    SetCameraPitchMax( flPitchMax : float ) : void
    /**
     *    Set the camera's yaw.
     */
    SetCameraYaw( flCameraYaw : float ) : void
    /**
     *    Offset the camera's look at point.
     */
    SetCameraLookAtPositionHeightOffset( flCameraLookAtHeightOffset : float ) : void
    /**
     *    Set the camera distance from the look at point.
     */
    SetCameraDistance( flDistance : float ) : void
    /**
     *   Set the gap between the bottom of the screen and the game rendering viewport. (Value expressed as pixels in a normalized 1024x768 viewport.)
     */
    SetRenderBottomInsetOverride( nInset : integer ) : void
    /**
     *    Set the gap between the top of the screen and the game rendering viewport. (Value expressed as pixels in a normalized 1024x768 viewport.)
     */
    SetRenderTopInsetOverride( nInset : integer ) : void
    /**
     *   Set the camera target for the local player, or -1 to clear.
     */
    SetCameraTarget( nTargetEntIndex : integer ) : void

}

interface CDOTA_PanoramaScript_CustomNetTables{

    /**
     *  Get a key from a custom net table
     */
    GetTableValue( pTableName : cstring , pKeyName : cstring ) 
    /**
     *  Get all values from a custom net table
     */
    GetAllTableValues( pTableName : cstring ) 
    /**
     *  Register a callback when a particular custom net table changes
     */
    SubscribeNetTableListener( tableName: string, callback:Function ) : any 
    /**
     *   Unsubscribe from a game event
     */
    UnsubscribeNetTableListener( nCallbackHandle : integer ) : any

}

interface CScriptBindingPR_Players{

    /**
     * Get the maximum number of players in the game.
     */
    GetMaxPlayers()
    /**
     * Get the maximum number of players on teams.
     */
    GetMaxTeamPlayers()
    /**
     *  Get the local player ID.
     */
    GetLocalPlayer()
    /**
     *   Is the nth player a valid player?
     */
    IsValidPlayerID( iPlayerID : integer ) : boolean
    /**
     *   Return the name of a player.
     */
    GetPlayerName( iPlayerID : integer )
    /**
     *  Get the entity index of the hero controlled by this player.
     */
    GetPlayerHeroEntityIndex( iPlayerID : integer )
    /**
     *   Get the entities this player has selected.
     */
    GetSelectedEntities( iPlayerID : integer )
    /**
     *  Get the entities this player is querying.
     */
    GetQueryUnit( iPlayerID : integer )
    /**
     *  Get local player current portrait unit. (ie. Player's hero or primary selected unit.)
     */
    GetLocalPlayerPortraitUnit()
    /**
     *  Can the player buy back?
     */
    CanPlayerBuyback( iPlayerID : integer )
    /**
     *  Does this player have a custom game ticket?
     */
    HasCustomGameTicketForPlayerID( iPlayerID : integer )
    /**
     *  The number of assists credited to a player.
     */
    GetAssists( iPlayerID : integer )
    /**
     *  
     */
    GetClaimedDenies( iPlayerID : integer )
    /**
     *  
     */
    GetClaimedMisses( iPlayerID : integer )
    /**
     *   The number of deaths a player has suffered.
     */
    GetDeaths( iPlayerID : integer )
    /**
     *   The number of denies credited to a player.
     */
    GetDenies( iPlayerID : integer )
    /**
     *   The amount of gold a player has.
     */
    GetGold( iPlayerID : integer )
    /**
     *  The number of kills credited to a player.
     */
    GetKills( iPlayerID : integer )
    /**
     *  
     */
    GetLastBuybackTime( iPlayerID : integer )
    /**
     *   
     */
    GetLastHitMultikill( iPlayerID : integer )
    /**
     *   The number of last hits credited to a player.
     */
    GetLastHits( iPlayerID : integer )
    /**
     *  
     */
    GetLastHitStreak( iPlayerID : integer )
    /**
     *  The current level of a player.
     */
    GetLevel( iPlayerID : integer )
    /**
     *   
     */
    GetMisses( iPlayerID : integer )
    /**
     *  
     */
    GetNearbyCreepDeaths( iPlayerID : integer )
    /**
     *   Total reliable gold for this player.
     */
    GetReliableGold( iPlayerID : integer )
    /**
     *   
     */
    GetRespawnSeconds( iPlayerID : integer )
    /**
     *   
     */
    GetStreak( iPlayerID : integer )
    /**
     *  Total gold earned in this game by this player.
     */
    GetTotalEarnedGold( iPlayerID : integer )
    /**
     *  Total xp earned in this game by this player.
     */
    GetTotalEarnedXP( iPlayerID : integer )
    /**
     *   Total unreliable gold for this player.
     */
    GetUnreliableGold( iPlayerID : integer )
    /**
     *   Get the team this player is on.
     */
    GetTeam( iPlayerID : integer )
    /**
     *   Average gold earned per minute for this player.
     */
    GetGoldPerMin( iPlayerID : integer )
    /**
     *   Average xp earned per minute for this player.
     */
    GetXPPerMin( iPlayerID : integer )
    /**
     *   Return the name of the hero a player is controlling.
     */
    GetPlayerSelectedHero( iPlayerID : integer )
    /**
     *  Get the player color.
     */
    GetPlayerColor( iPlayerID : integer )
    /**
     *   Is this player a spectator.
     */
    IsSpectator( iPlayerID : integer ) : boolean
    /**
     *   .
     */
    PlayerPortraitClicked( nClickedPlayerID : integer , bHoldingCtrl : boolean ,  bHoldingAlt : boolean )
    /**
     *  .
     */
    BuffClicked( nEntity : integer , nBuffSerial : integer ,  bAlert : boolean )

}

interface CScriptBindingPR_Entities{
    /**
     *  Get the world origin of the entity.
     */
    GetAbsOrigin( nEntityIndex : integer )
    /**
     *  Get the forward vector of the entity.
     */
    GetForward( nEntityIndex : integer )
    /**
     *  Get the right vector of the entity.
     */
    GetRight( nEntityIndex : integer )
    /**
     *   Get the up vector of the entity.
     */
    GetUp( nEntityIndex : integer )
    /**
     * Get all the building 
     */
    GetAllBuildingEntities()
    /**
     * Get all the hero 
     */
    GetAllHeroEntities()
    /**
     *   Get all the entities with a given name.
     */
    GetAllEntitiesByName( pszName : cstring )
    /**
     *  Get all the entities with a given classname.
     */
    GetAllEntitiesByClassname( pszName : cstring )
    /**
     * Get all the creature 
     */
    GetAllCreatureEntities()
    /**
     * Get all the 
     */
    GetAllEntities()
    /**
     *  
     */
    CanBeDominated( nEntityIndex : integer )
    /**
     *   
     */
    HasAttackCapability( nEntityIndex : integer )
    /**
     *  
     */
    HasCastableAbilities( nEntityIndex : integer )
    /**
     *   
     */
    HasFlyingVision( nEntityIndex : integer )
    /**
     *  
     */
    HasFlyMovementCapability( nEntityIndex : integer )
    /**
     *   
     */
    HasGroundMovementCapability( nEntityIndex : integer )
    /**
     *   
     */
    HasMovementCapability( nEntityIndex : integer )
    /**
     *  
     */
    HasScepter( nEntityIndex : integer )
    /**
     *   
     */
    HasUpgradeableAbilities( nEntityIndex : integer )
    /**
     *   
     */
    HasUpgradeableAbilitiesThatArentMaxed( nEntityIndex : integer )
    /**
     *   
     */
    IsAlive( nEntityIndex : integer ) : boolean
    /**
     *   
     */
    IsAncient( nEntityIndex : integer ) : boolean
    /**
     *  
     */
    IsAttackImmune( nEntityIndex : integer ) : boolean
    /**
     *  
     */
    IsBarracks( nEntityIndex : integer ) : boolean
    /**
     *   
     */
    IsBlind( nEntityIndex : integer ) : boolean
    /**
     *  
     */
    IsBoss( nEntityIndex : integer ) : boolean
    /**
     *  
     */
    IsRoshan( nEntityIndex : integer ) : boolean
    /**
     *  
     */
    IsBuilding( nEntityIndex : integer ) : boolean
    /**
     *   
     */
    IsCommandRestricted( nEntityIndex : integer ) : boolean
    /**
     *  
     */
    IsConsideredHero( nEntityIndex : integer ) : boolean
    /**
     *   
     */
    IsControllableByAnyPlayer( nEntityIndex : integer ) : boolean
    /**
     *   
     */
    IsCourier( nEntityIndex : integer ) : boolean
    /**
     *  
     */
    IsCreature( nEntityIndex : integer ) : boolean
    /**
     *   
     */
    IsCreep( nEntityIndex : integer ) : boolean
    /**
     *   
     */
    IsCreepHero( nEntityIndex : integer ) : boolean
    /**
     *  
     */
    IsDeniable( nEntityIndex : integer ) : boolean
    /**
     *   
     */
    IsDominated( nEntityIndex : integer ) : boolean
    /**
     *   
     */
    IsEnemy( nEntityIndex : integer ) : boolean
    /**
     *   
     */
    IsEvadeDisabled( nEntityIndex : integer ) : boolean
    /**
     *  
     */
    IsFort( nEntityIndex : integer ) : boolean
    /**
     *  
     */
    IsFrozen( nEntityIndex : integer ) : boolean
    /**
     *   
     */
    IsGeneratedByEconItem( nEntityIndex : integer ) : boolean
    /**
     *  
     */
    IsHallofFame( nEntityIndex : integer ) : boolean
    /**
     *  
     */
    IsDisarmed( nEntityIndex : integer ) : boolean
    /**
     *  
     */
    IsHero( nEntityIndex : integer ) : boolean
    /**
     *   
     */
    IsHexed( nEntityIndex : integer ) : boolean
    /**
     *  
     */
    IsIllusion( nEntityIndex : integer ) : boolean
    /**
     *   
     */
    IsInRangeOfFountain( nEntityIndex : integer ) : boolean
    /**
     *  
     */
    IsInventoryEnabled( nEntityIndex : integer ) : boolean
    /**
     *   
     */
    IsInvisible( nEntityIndex : integer ) : boolean
    /**
     *  
     */
    IsInvulnerable( nEntityIndex : integer ) : boolean
    /**
     *   
     */
    IsLaneCreep( nEntityIndex : integer ) : boolean
    /**
     *   
     */
    IsLowAttackPriority( nEntityIndex : integer ) : boolean
    /**
     *   
     */
    IsMagicImmune( nEntityIndex : integer ) : boolean
    /**
     *  
     */
    IsMechanical( nEntityIndex : integer ) : boolean
    /**
     *   
     */
    IsMuted( nEntityIndex : integer ) : boolean
    /**
     *   
     */
    IsNeutralUnitType( nEntityIndex : integer ) : boolean
    /**
     *  
     */
    IsNightmared( nEntityIndex : integer ) : boolean
    /**
     *   
     */
    IsOther( nEntityIndex : integer ) : boolean
    /**
     *   
     */
    IsOutOfGame( nEntityIndex : integer ) : boolean
    /**
     *  
     */
    IsOwnedByAnyPlayer( nEntityIndex : integer ) : boolean
    /**
     *   
     */
    IsPhantom( nEntityIndex : integer ) : boolean
    /**
     *  
     */
    IsRangedAttacker( nEntityIndex : integer ) : boolean
    /**
     *  
     */
    IsRealHero( nEntityIndex : integer ) : boolean
    /**
     *  
     */
    IsRooted( nEntityIndex : integer ) : boolean
    /**
     *  
     */
    IsSelectable( nEntityIndex : integer ) : boolean
    /**
     *  
     */
    IsShop( nEntityIndex : integer ) : boolean
    /**
     *  
     */
    IsSilenced( nEntityIndex : integer ) : boolean
    /**
     *   
     */
    IsSpeciallyDeniable( nEntityIndex : integer ) : boolean
    /**
     *   
     */
    IsStunned( nEntityIndex : integer ) : boolean
    /**
     *  
     */
    IsSummoned( nEntityIndex : integer ) : boolean
    /**
     *   
     */
    IsTower( nEntityIndex : integer ) : boolean
    /**
     *  
     */
    IsUnselectable( nEntityIndex : integer ) : boolean
    /**
     *  
     */
    IsWard( nEntityIndex : integer ) : boolean
    /**
     *  
     */
    IsZombie( nEntityIndex : integer ) : boolean
    /**
     *   
     */
    NoHealthBar( nEntityIndex : integer )
    /**
     *  
     */
    NoTeamMoveTo( nEntityIndex : integer )
    /**
     *  
     */
    NoTeamSelect( nEntityIndex : integer )
    /**
     *  
     */
    NotOnMinimap( nEntityIndex : integer )
    /**
     *  
     */
    NotOnMinimapForEnemies( nEntityIndex : integer )
    /**
     *   
     */
    NoUnitCollision( nEntityIndex : integer )
    /**
     *  
     */
    PassivesDisabled( nEntityIndex : integer )
    /**
     *  
     */
    ProvidesVision( nEntityIndex : integer )
    /**
     *  
     */
    UsesHeroAbilityNumbers( nEntityIndex : integer )
    /**
     *   
     */
    GetAbilityCount( nEntityIndex : integer )
    /**
     *  
     */
    GetCombatClassAttack( nEntityIndex : integer )
    /**
     *  
     */
    GetCombatClassDefend( nEntityIndex : integer )
    /**
     *   
     */
    GetCurrentVisionRange( nEntityIndex : integer )
    /**
     *  
     */
    GetDamageBonus( nEntityIndex : integer )
    /**
     *  
     */
    GetDamageMax( nEntityIndex : integer )
    /**
     *  
     */
    GetDamageMin( nEntityIndex : integer )
    /**
     *   
     */
    GetDayTimeVisionRange( nEntityIndex : integer )
    /**
     *   
     */
    GetHealth( nEntityIndex : integer )
    /**
     *  
     */
    GetHealthPercent( nEntityIndex : integer )
    /**
     *   
     */
    GetHealthThinkRegen( nEntityIndex : integer )
    /**
     *  
     */
    GetLevel( nEntityIndex : integer )
    /**
     *  
     */
    GetMaxHealth( nEntityIndex : integer )
    /**
     *   
     */
    GetNightTimeVisionRange( nEntityIndex : integer )
    /**
     *   
     */
    GetStates( nEntityIndex : integer )
    /**
     *  
     */
    GetTotalPurchasedUpgradeGoldCost( nEntityIndex : integer )
    /**
     *   
     */
    GetTeamNumber( nEntityIndex : integer )
    /**
     *  
     */
    GetAttackRange( nEntityIndex : integer )
    /**
     *  
     */
    GetAttackSpeed( nEntityIndex : integer )
    /**
     *   
     */
    GetAttacksPerSecond( nEntityIndex : integer )
    /**
     *   
     */
    GetBaseAttackTime( nEntityIndex : integer )
    /**
     *   
     */
    GetBaseMagicalResistanceValue( nEntityIndex : integer )
    /**
     *  
     */
    GetBaseMoveSpeed( nEntityIndex : integer )
    /**
     *   
     */
    GetBonusPhysicalArmor( nEntityIndex : integer )
    /**
     *   
     */
    GetCollisionPadding( nEntityIndex : integer )
    /**
     *   
     */
    GetEffectiveInvisibilityLevel( nEntityIndex : integer )
    /**
     *  
     */
    GetHasteFactor( nEntityIndex : integer )
    /**
     *   
     */
    GetHullRadius( nEntityIndex : integer )
    /**
     *   
     */
    GetIdealSpeed( nEntityIndex : integer )
    /**
     *   
     */
    GetIncreasedAttackSpeed( nEntityIndex : integer )
    /**
     *   
     */
    GetMana( nEntityIndex : integer )
    /**
     *   
     */
    GetManaThinkRegen( nEntityIndex : integer )
    /**
     *  
     */
    GetMaxMana( nEntityIndex : integer )
    /**
     *  
     */
    GetMagicalArmorValue( nEntityIndex : integer )
    /**
     *  
     */
    GetPaddedCollisionRadius( nEntityIndex : integer )
    /**
     *   
     */
    GetPercentInvisible( nEntityIndex : integer )
    /**
     *   
     */
    GetPhysicalArmorValue( nEntityIndex : integer )
    /**
     *  
     */
    GetProjectileCollisionSize( nEntityIndex : integer )
    /**
     *   
     */
    GetRingRadius( nEntityIndex : integer )
    /**
     *   
     */
    GetSecondsPerAttack( nEntityIndex : integer )
    /**
     *  
     */
    ManaFraction( nEntityIndex : integer )
    /**
     *  
     */
    GetClassname( nEntityIndex : integer )
    /**
     *  
     */
    GetDisplayedUnitName( nEntityIndex : integer )
    /**
     *   
     */
    GetSelectionGroup( nEntityIndex : integer )
    /**
     *   
     */
    GetSoundSet( nEntityIndex : integer )
    /**
     *  
     */
    GetUnitLabel( nEntityIndex : integer )
    /**
     *   
     */
    GetUnitName( nEntityIndex : integer )
    /**
     *   
     */
    GetTotalDamageTaken( nEntityIndex : integer )
    /**
     *  
     */
    IsControllableByPlayer( nEntityIndex : integer , nPlayerIndex : integer ) : boolean
    /**
     *   
     */
    GetChosenTarget( nEntityIndex : integer )
    /**
     *   
     */
    HasItemInInventory( nEntityIndex : integer , pItemName : cstring )
    /**
     *   
     */
    GetRangeToUnit( nEntityIndex : integer , nEntityIndex2 : integer )
    /**
     *   
     */
    IsEntityInRange( nEntityIndex : integer , nEntityIndex2 : integer ,  flRange : float ) : boolean
    /**
     *   
     */
    GetMoveSpeedModifier( nEntityIndex : integer , flBaseSpeed : float )
    /**
     *  
     */
    CanAcceptTargetToAttack( nEntityIndex : integer , nEntityIndex2 : integer )
    /**
     *   
     */
    InState( nEntityIndex : integer , nState : integer )
    /**
     *  
     */
    GetArmorForDamageType( nEntityIndex : integer , iDamageType : integer )
    /**
     *   
     */
    GetArmorReductionForDamageType( nEntityIndex : integer , iDamageType : integer )
    /**
     *   
     */
    IsInRangeOfShop( nEntityIndex : integer , iShopType : integer ,  bSpecific : boolean ) : boolean
    /**
     *  
     */
    GetNumItemsInStash( nEntityIndex : integer )
    /**
     *  
     */
    GetNumItemsInInventory( nEntityIndex : integer )
    /**
     *   
     */
    GetItemInSlot( nEntityIndex : integer , nSlotIndex : integer )
    /**
     *  
     */
    GetAbility( nEntityIndex : integer , nSlotIndex : integer )
    /**
     *  
     */
    GetAbilityByName( nEntityIndex : integer , pszAbilityName : cstring )
    /**
     *   
     */
    GetNumBuffs( nEntityIndex : integer )
    /**
     *  
     */
    GetBuff( nEntityIndex : integer , nBufIndex : integer )
    /**
     *  
     */
    GetAbilityPoints( nEntityIndex : integer )
    /**
     *  
     */
    GetCurrentXP( nEntityIndex : integer )
    /**
     *  
     */
    GetNeededXPToLevel( nEntityIndex : integer )
    /**
     *  Get the currently selected entities
     */
    GetSelectionEntities( nEntityIndex : integer )
    /**
     *   Is this a valid entity index?
     */
    IsValidEntity( nEntityIndex : integer ) : boolean
    /**
     *  Is this entity an item container in the world?
     */
    IsItemPhysical( nEntityIndex : integer ) : boolean
    /**
     *  Get the item contained in this physical item container.
     */
    GetContainedItem( nEntityIndex : integer )

}

interface CScriptBindingPR_Abilities{
    /**
     *  
     */
    GetAbilityName( nEntityIndex : integer ) 
    /**
     * 
     */
    GetAbilityTextureName( nEntityIndex : integer ) 
    /**
     * 
     */
    GetAssociatedPrimaryAbilities( nEntityIndex : integer ) 
    /**
     * 
     */
    GetAssociatedSecondaryAbilities( nEntityIndex : integer ) 
    /**
     * 
     */
    GetHotkeyOverride( nEntityIndex : integer ) 
    /**
     *  
     */
    GetIntrinsicModifierName( nEntityIndex : integer ) 
    /**
     * 
     */
    GetSharedCooldownName( nEntityIndex : integer ) 
    /**
     *  
     */
    AbilityReady( nEntityIndex : integer ) 
    /**
     *  Returns an AbilityLearnResult_t
     */
    CanAbilityBeUpgraded( nEntityIndex : integer ) : integer
    /**
     * 
     */
    CanBeExecuted( nEntityIndex : integer ) : boolean
    /**
     *  
     */
    GetAbilityDamage( nEntityIndex : integer ) 
    /**
     *  
     */
    GetAbilityDamageType( nEntityIndex : integer ) 
    /**
     * 
     */
    GetAbilityTargetFlags( nEntityIndex : integer ) 
    /**
     *  
     */
    GetAbilityTargetTeam( nEntityIndex : integer ) 
    /**
     *  
     */
    GetAbilityTargetType( nEntityIndex : integer ) 
    /**
     *  
     */
    GetAbilityType( nEntityIndex : integer ) 
    /**
     * 
     */
    GetBehavior( nEntityIndex : integer ) 
    /**
     *  
     */
    GetCastRange( nEntityIndex : integer ) 
    /**
     *  
     */
    GetChannelledManaCostPerSecond( nEntityIndex : integer ) 
    /**
     * 
     */
    GetCurrentCharges( nEntityIndex : integer ) 
    /**
     * 
     */
    GetEffectiveLevel( nEntityIndex : integer ) 
    /**
     * 
     */
    GetHeroLevelRequiredToUpgrade( nEntityIndex : integer ) 
    /**
     *  
     */
    GetLevel( nEntityIndex : integer ) 
    /**
     * 
     */
    GetManaCost( nEntityIndex : integer ) 
    /**
     * 
     */
    GetMaxLevel( nEntityIndex : integer ) 
    /**
     *  
     */
    AttemptToUpgrade( nEntityIndex : integer ) 
    /**
     *  
     */
    CanLearn( nEntityIndex : integer ) 
    /**
     *  
     */
    GetAutoCastState( nEntityIndex : integer ) 
    /**
     *  
     */
    GetToggleState( nEntityIndex : integer ) 
    /**
     *  
     */
    HasScepterUpgradeTooltip( nEntityIndex : integer ) 
    /**
     * 
     */
    IsActivated( nEntityIndex : integer )  : boolean
    /**
     * 
     */
    IsActivatedChanging( nEntityIndex : integer )  : boolean
    /**
     *  
     */
    IsAttributeBonus( nEntityIndex : integer )  : boolean
    /**
     *  
     */
    IsAutocast( nEntityIndex : integer )  : boolean
    /**
     * 
     */
    IsCooldownReady( nEntityIndex : integer )  : boolean
    /**
     *  
     */
    IsDisplayedAbility( nEntityIndex : integer )  : boolean
    /**
     *  
     */
    IsHidden( nEntityIndex : integer )  : boolean
    /**
     *  
     */
    IsHiddenWhenStolen( nEntityIndex : integer )  : boolean
    /**
     *  
     */
    IsInAbilityPhase( nEntityIndex : integer )  : boolean
    /**
     *  
     */
    IsItem( nEntityIndex : integer )  : boolean
    /**
     * 
     */
    IsMarkedAsDirty( nEntityIndex : integer )  : boolean
    /**
     * 
     */
    IsMuted( nEntityIndex : integer )  : boolean
    /**
     * 
     */
    IsOnCastbar( nEntityIndex : integer )  : boolean
    /**
     *  
     */
    IsOnLearnbar( nEntityIndex : integer )  : boolean
    /**
     *  
     */
    IsOwnersGoldEnough( nEntityIndex : integer )  : boolean
    /**
     *  
     */
    IsOwnersGoldEnoughForUpgrade( nEntityIndex : integer )  : boolean
    /**
     *  
     */
    IsOwnersManaEnough( nEntityIndex : integer )  : boolean
    /**
     * 
     */
    IsPassive( nEntityIndex : integer )  : boolean
    /**
     *  
     */
    IsRecipe( nEntityIndex : integer )  : boolean
    /**
     * 
     */
    IsSharedWithTeammates( nEntityIndex : integer )  : boolean
    /**
     * 
     */
    IsStealable( nEntityIndex : integer )  : boolean
    /**
     *  
     */
    IsStolen( nEntityIndex : integer )  : boolean
    /**
     *  
     */
    IsToggle( nEntityIndex : integer )  : boolean
    /**
     *  
     */
    GetAOERadius( nEntityIndex : integer ) 
    /**
     *  
     */
    GetBackswingTime( nEntityIndex : integer ) 
    /**
     *  
     */
    GetCastPoint( nEntityIndex : integer ) 
    /**
     * 
     */
    GetChannelStartTime( nEntityIndex : integer ) 
    /**
     *  
     */
    GetChannelTime( nEntityIndex : integer ) 
    /**
     * 
     */
    GetCooldown( nEntityIndex : integer ) 
    /**
     * 
     */
    GetCooldownLength( nEntityIndex : integer ) 
    /**
     * 
     */
    GetCooldownTime( nEntityIndex : integer ) 
    /**
     *  
     */
    GetCooldownTimeRemaining( nEntityIndex : integer ) 
    /**
     * 
     */
    GetDuration( nEntityIndex : integer ) 
    /**
     * 
     */
    GetUpgradeBlend( nEntityIndex : integer ) 
    /**
     * Get the local player's current active ability. (Pre-cast targetting state.)
     */
    GetLocalPlayerActiveAbility()
    /**
     *  
     */
    GetCaster( nAbilityIndex : integer ) 
    /**
     * 
     */
    GetCustomValueFor( nAbilityIndex : integer , pszAbilityVarName : cstring ) 
    /**
     *  
     */
    GetLevelSpecialValueFor( nAbilityIndex : integer , szName : cstring ,  nLevel : integer ) 
    /**
     * 
     */
    GetSpecialValueFor( nAbilityIndex : integer , szName : cstring ) 
    /**
     * 
     */
    IsCosmetic( nAbilityIndex : integer , nTargetEntityIndex : integer )  : boolean
    /**
     * Attempt to execute the specified ability (Equivalent to clicking the ability in the HUD action bar)
     */
    ExecuteAbility( nAbilityEntIndex : integer , nCasterEntIndex : integer ,  bIsQuickCast : boolean ) 
    /**
     * Attempt to double-tap (self-cast) the specified ability (Equivalent to double-clicking the ability in the HUD action bar)
     */
    CreateDoubleTapCastOrder( nAbilityEntIndex : integer , nCasterEntIndex : integer ) 
    /**
     *  Ping the specified ability (Equivalent to alt-clicking the ability in the HUD action bar)
     */
    PingAbility( nAbilityIndex : integer ) 
    /**
     *  Returns the keybind (as a string) for the specified ability.
     */
    GetKeybind( nAbilityEntIndex : integer ) 

}

interface CScriptBindingPR_Items extends CScriptBindingPR_Abilities{
    /**
     *   
     */
    ShouldDisplayCharges( nEntityIndex : integer )
    /**
     *   
     */
    AlwaysDisplayCharges( nEntityIndex : integer )
    /**
     *   
     */
    ShowSecondaryCharges( nEntityIndex : integer )
    /**
     *   
     */
    CanBeSoldByLocalPlayer( nEntityIndex : integer )
    /**
     *   
     */
    CanDoubleTapCast( nEntityIndex : integer )
    /**
     *   
     */
    ForceHideCharges( nEntityIndex : integer )
    /**
     *  
     */
    IsAlertableItem( nEntityIndex : integer ) : boolean
    /**
     *   
     */
    IsCastOnPickup( nEntityIndex : integer ) : boolean
    /**
     *   
     */
    IsDisassemblable( nEntityIndex : integer ) : boolean
    /**
     *  
     */
    IsDroppable( nEntityIndex : integer ) : boolean
    /**
     *   
     */
    IsInnatelyDisassemblable( nEntityIndex : integer ) : boolean
    /**
     *   
     */
    IsKillable( nEntityIndex : integer ) : boolean
    /**
     *  
     */
    IsMuted( nEntityIndex : integer ) : boolean
    /**
     *  
     */
    IsPermanent( nEntityIndex : integer ) : boolean
    /**
     *  
     */
    IsPurchasable( nEntityIndex : integer ) : boolean
    /**
     *   
     */
    IsRecipe( nEntityIndex : integer ) : boolean
    /**
     *  
     */
    IsRecipeGenerated( nEntityIndex : integer ) : boolean
    /**
     *   
     */
    IsSellable( nEntityIndex : integer ) : boolean
    /**
     *  
     */
    IsStackable( nEntityIndex : integer ) : boolean
    /**
     *   
     */
    ProRatesChargesWhenSelling( nEntityIndex : integer )
    /**
     *  
     */
    RequiresCharges( nEntityIndex : integer )
    /**
     *  
     */
    CanBeExecuted( nEntityIndex : integer )
    /**
     *  
     */
    GetCost( nEntityIndex : integer )
    /**
     *  
     */
    GetCurrentCharges( nEntityIndex : integer )
    /**
     *  
     */
    GetSecondaryCharges( nEntityIndex : integer )
    /**
     *  
     */
    GetDisplayedCharges( nEntityIndex : integer )
    /**
     *  
     */
    GetInitialCharges( nEntityIndex : integer )
    /**
     *   
     */
    GetItemColor( nEntityIndex : integer )
    /**
     *  
     */
    GetShareability( nEntityIndex : integer )
    /**
     *  
     */
    GetAbilityTextureSF( nEntityIndex : integer )
    /**
     *   
     */
    GetAssembledTime( nEntityIndex : integer )
    /**
     *  
     */
    GetPurchaseTime( nEntityIndex : integer )
    /**
     *  
     */
    GetPurchaser( nItemID : integer )
    /**
     *  Attempt to have the local player disassemble the specified item. Returns false if the order wasn't issued.
     */
    LocalPlayerDisassembleItem( nItem : integer )
    /**
     *  Attempt to have the local player drop the specified item from its stash. Returns false if the order wasn't issued.
     */
    LocalPlayerDropItemFromStash( nItem : integer )
    /**
     *  Attempt to have the local player alert allies about the specified item. Returns false if the order wasn't issued.
     */
    LocalPlayerItemAlertAllies( nItem : integer )
    /**
     *  Attempt to have the local player move the specified item to its stash. Returns false if the order wasn't issued.
     */
    LocalPlayerMoveItemToStash( nItem : integer )
    /**
     *   Attempt to have the local player sell the specified item. Returns false if the order wasn't issued.
     */
    LocalPlayerSellItem( nItem : integer )

}

interface CScriptBindingPR_Game{
    /**
     * 
     */
    Time()
    /**
     *  
     */
    GetGameTime()
    /**
     * 
     */
    GetDOTATime( bIncludePreGame : boolean , bIncludeNegativeTime : boolean ) 
    /**
     *  Return the team id of the winning team.
     */
    GetGameWinner()
    /**
     * 
     */
    GetStateTransitionTime()
    /**
     *  Get the difficulty setting of the 
     */
    GetCustomGameDifficulty()
    /**
     * Returns true if the user has enabled flipped HUD
     */
    IsHUDFlipped() : boolean
    /**
     * Returns the width of the display.
     */
    GetScreenWidth()
    /**
     *  Returns the height of the display.
     */
    GetScreenHeight()
    /**
     *  Converts the specified x,y,z world co-ordinate into an x screen coordinate. Returns -1 if behind the camera
     */
    WorldToScreenX( x : float , y : float ,  z : float ) 
    /**
     *  Converts the specified x,y,z world co-ordinate into a y screen coordinate. Returns -1 if behind the camera
     */
    WorldToScreenY( x : float , y : float ,  z : float ) 
    /**
     *  Converts the specified x, y screen coordinates into a x, y, z world coordinates.
     */
    ScreenXYToWorld( nX : integer , nY : integer ) 
    /**
     *  Returns the keybind (as a string) for the requested ability slot.
     */
    GetKeybindForAbility( iSlot : integer ) 
    /**
     * 
     */
    GetNianFightTimeLeft()
    /**
     * 
     */
    GetState()
    /**
     *  
     */
    GameStateIs( nState : integer )  : boolean
    /**
     *  
     */
    GameStateIsBefore( nState : integer )  : boolean
    /**
     * 
     */
    GameStateIsAfter( nState : integer )  : boolean
    /**
     *  
     */
    AddCommand( pszCommandName : cstring , callback : js_value ,  pszDescription : cstring , nFlags : integer ) 
    /**
     * 
     */
    GetLocalPlayerID()
    /**
     *  Assign the local player to the specified team
     */
    PlayerJoinTeam( nTeamID : integer ) 
    /**
     * Assign the currently unassigned players to teams
     */
    AutoAssignPlayersToTeams()
    /**
     * Shuffle the team assignments of all of the players currently assigned to a team.
     */
    ShufflePlayerTeamAssignments()
    /**
     * Set the remaining seconds in team setup before the game starts. -1 to stop the countdown timer
     */
    SetRemainingSetupTime( flSeconds : float )  : void
    /**
     *  Set the amount of time in seconds that will be set as the remaining time when all players are assigned to a team.
     */
    SetAutoLaunchDelay( flSeconds : float )  : void
    /**
     *  Enable or disable automatically starting the game once all players are assigned to a team
     */
    SetAutoLaunchEnabled( bEnable : boolean )  : void
    /**
     * Return true of false indicating if automatically starting the game is enabled.
     */
    GetAutoLaunchEnabled()
    /**
     * Lock the team selection preventing players from swiching teams.
     */
    SetTeamSelectionLocked( bLockTeams : boolean )  : void
    /**
     * Returns true or false to indicate if team selection is locked
     */
    GetTeamSelectionLocked()
    /**
     *  Get all team IDs
     */
    GetAllTeamIDs()
    /**
     *  Get all player IDs
     */
    GetAllPlayerIDs()
    /**
     * Get unassigned player IDs
     */
    GetUnassignedPlayerIDs()
    /**
     *  Get info about the player hero ultimate ability
     */
    GetPlayerUltimateStateOrTime( nPlayerID : integer ) 
    /**
     * Whether the local player has muted text and voice chat for the specified player id
     */
    IsPlayerMuted( nPlayerID : integer )  : boolean
    /**
     *  Set whether the local player has muted text and voice chat for the specified player id
     */
    SetPlayerMuted( nPlayerID : integer , bMuted : boolean )  : void
    /**
     *  Get detailed information for the given team
     */
    GetTeamDetails( nTeam : integer ) 
    /**
     * Get details for the local player
     */
    GetLocalPlayerInfo()
    /**
     *  Get info about the player items.
     */
    GetPlayerItems( nPlayerID : integer ) 
    /**
     * Get info about the given player
     */
    GetPlayerInfo( nPlayerID : integer ) 
    /**
     *  Get player IDs for the given team
     */
    GetPlayerIDsOnTeam( nTeam : integer ) 
    /**
     *  
     */
    ServerCmd( pMsg : cstring ) 
    /**
     * 
     */
    FinishGame()
    /**
     * Emit a sound for the local player. Returns an integer handle that can be passed to StopSound. (Returns 0 on failure.)
     */
    EmitSound( pSoundEventName : cstring ) 
    /**
     * Stop a current playing sound on the local player. Takes handle from a call to EmitSound.
     */
    StopSound( nHandle : integer ) 
    /**
     * Return information about the current map.
     */
    GetMapInfo()
    /**
     *  Orders from the local player - takes a single arguments object that supports: dotaunitorder_t OrderType, ent_index TargetIndex, vector Position, ent_index AbilityIndex, OrderIssuer_t OrderIssuer, ent_index UnitIndex, OrderQueueBehavior_t QueueBehavior, bool ShowEffects.
     */
    PrepareUnitOrders( args : js_raw_args ) 
    /**
     * Order a unit to drop the specified item at the current cursor location.
     */
    DropItemAtCursor( nControlledUnitEnt : integer , nItemEnt : integer ) 
    /**
     *  
     */
    EnterAbilityLearnMode()
    /**
     *  
     */
    EndAbilityLearnMode()
    /**
     * 
     */
    IsInAbilityLearnMode() : boolean

}

interface ${

    /**
    Log a message
    */
    Msg(args:any) : void
    /**
    Dispatch an event
    */
    DispatchEvent( eventName : string, eventArgs: any ) : void
    /**
    Dispatch an event to occur later
    */
    DispatchEventAsync( delay:float, eventName: string, eventArgs: any) : void
    /**
    Register an event handler
    */
    RegisterEventHandler( eventName: string, context: Panel, callback: Function ) : void
    /**
    Register a handler for an event that is not otherwise handled
    */
    RegisterForUnhandledEvent( eventName: string, callback: Function )
    /**
    Remove an unhandled event handler
    */
    UnregisterForUnhandledEvent( eventNameUnconfirmYet: string )
    /**
    Find an element
    */
    FindChildInContext( idSelector: string ) : Panel
    /**
    Make a web request
    */
    AsyncWebRequest( url: string, args:Object )
    /**
    Create a new panel
    */
    CreatePanel( panelType:string, parent:Panel, id:string ) : Panel
    /**
    Localize a string
    */
    Localize( js_raw_args_1 : js_raw_args ) : string
    /**
    Get the current language
    */
    Language() : string
    /**
    Schedule a function to be called later
    */
    Schedule( delay:float, callback:Function ) : Function
    /**
    Cancelse a scheduled function
    */
    CancelScheduled( previousSchedule: Function )
    /**
    Get the current panel context
    */
    GetContextPanel() : Panel
    /**
    Register a key binding
    */
    RegisterKeyBind( context:Panel, keyName:string, callback:Function )
    /**
    Call a function on each given item
    */
    Each( table:Object, callback:Function )

}

interface Panel{
    visible( boolean_1 : boolean )
    enabled( boolean_1 : boolean )
    checked( boolean_1 : boolean )
    defaultfocus( cstring_1 : cstring )
    inputnamespace( cstring_1 : cstring )
    hittest( boolean_1 : boolean ) : boolean
    hittestchildren( boolean_1 : boolean )
    tabindex( float_1 : float )
    selectionpos_x( float_1 : float )
    selectionpos_y( float_1 : float )
    id()
    layoutfile()
    contentwidth()
    contentheight()
    desiredlayoutwidth()
    desiredlayoutheight()
    actuallayoutwidth()
    actuallayoutheight()
    actualxoffset()
    actualyoffset()
    scrolloffset_y()
    scrolloffset_x()
    style()
    AddClass( cstring_1 : cstring )
    RemoveClass( cstring_1 :  cstring )
    BHasClass( cstring_1 :  cstring )
    SetHasClass( cstring_1 : cstring , boolean_2 : boolean ) : void
    ToggleClass( cstring_1 : cstring )
    ClearPanelEvent( cstring_1 : cstring )
    SetDraggable( boolean_1 : boolean ) : void
    IsDraggable() : boolean
    GetChildCount()
    GetChild( integer_1 : integer ) : Panel
    GetChildIndex( unknown_variant_type_1 : unknown_variant_type )
    Children() : Array<Panel>
    FindChildrenWithClassTraverse( cstring_1 : cstring )
    GetParent() : Panel
    SetParent( unknown_variant_type_1 : unknown_variant_type ) : void
    FindChild( cstring_1 : cstring )
    FindChildTraverse( cstring_1 : cstring )
    FindChildInLayoutFile( cstring_1 : cstring )
    RemoveAndDeleteChildren()
    MoveChildBefore( unknown_variant_type_1 : unknown_variant_type , unknown_variant_type_2 : unknown_variant_type )
    MoveChildAfter( unknown_variant_type_1 : unknown_variant_type , unknown_variant_type_2 : unknown_variant_type )
    GetPositionWithinWindow()
    ApplyStyles( boolean_1 : boolean )
    ClearPropertyFromCode( unknown_variant_type_1 : unknown_variant_type )
    DeleteAsync( float_1 : float )
    BIsTransparent() : boolean
    BAcceptsInput() : boolean
    BAcceptsFocus() : boolean
    SetFocus() : void
    UpdateFocusInContext()
    BHasHoverStyle() : boolean
    SetAcceptsFocus( boolean_1 : boolean ) : void
    SetDisableFocusOnMouseDown( boolean_1 : boolean ) : void
    BHasKeyFocus() : boolean
    SetScrollParentToFitWhenFocused( boolean_1 : boolean ) : void
    BScrollParentToFitWhenFocused() : boolean
    IsSelected() : boolean
    BHasDescendantKeyFocus()
    BLoadLayout( cstring_1 : cstring , boolean_2 : boolean ,  boolean_3 : boolean ) : boolean
    BLoadLayoutSnippet(SnippetName: string) : boolean
    BLoadLayoutFromString( js_raw_args_1 : js_raw_args ) : boolean
    LoadLayoutFromStringAsync( cstring_1 : cstring , boolean_2 : boolean ,  boolean_3 : boolean )
    LoadLayoutAsync( cstring_1 : cstring , boolean_2 : boolean ,  boolean_3 : boolean )
    BCreateChildren( cstring_1 : cstring ) : boolean
    SetTopOfInputContext( boolean_1 : boolean ) : void
    SetDialogVariable( cstring_1 : cstring , cstring_2 : cstring ) : void
    SetDialogVariableInt( cstring_1 : cstring , integer_2 : integer ) : void
    ScrollToTop()
    ScrollToBottom()
    ScrollToLeftEdge()
    ScrollToRightEdge()
    ScrollParentToMakePanelFit( unknown_variant_type_1 : unknown_variant_type , boolean_2 : boolean )
    BCanSeeInParentScroll() : boolean
    GetAttributeInt( cstring_1 : cstring , integer_2 : integer )
    GetAttributeString( cstring_1 : cstring , cstring_2 : cstring )
    GetAttributeUInt32( cstring_1 : cstring , unsigned_2 : unsigned )
    SetAttributeInt( cstring_1 : cstring , integer_2 : integer ) : void
    SetAttributeString( cstring_1 : cstring , cstring_2 : cstring ) : void
    SetAttributeUInt32( cstring_1 : cstring , unsigned_2 : unsigned ) : void
    SetInputNamespace( cstring_1 : cstring ) : void
    RegisterForReadyEvents( boolean_1 : boolean )
    BReadyForDisplay() : boolean
    SetReadyForDisplay( boolean_1 : boolean ) : void
    SetPanelEvent( eventName: string, callback:Function ) : void
    rememberchildfocus( boolean_1 : boolean )
    paneltype()

}

interface Button extends Panel{
}

interface Image extends Panel{
    SetImage(url:string) : void
}

interface Label extends Panel{
    text( cstring_1 : cstring )
    html( boolean_1 : boolean )
}

interface DOTAAvatarImage extends Panel{
    steamid( cstring_1 : cstring )
    accountid( cstring_1 : cstring )
}

interface CustomUIElement extends Panel{
    //没有多内容
}

interface DOTAAbilityImage extends Panel{
    SetImage( cstring_1 : cstring ) : void
    SetScaling( cstring_1 : cstring ) : void
    abilityname( cstring_1 : cstring )
    contextEntityIndex( integer_1 : integer )
}

declare var DOTA_GameState : DOTA_GameState;
interface DOTA_GameState {
    DOTA_GAMERULES_STATE_INIT
    DOTA_GAMERULES_STATE_WAIT_FOR_PLAYERS_TO_LOAD
    DOTA_GAMERULES_STATE_HERO_SELECTION
    DOTA_GAMERULES_STATE_STRATEGY_TIME
    DOTA_GAMERULES_STATE_PRE_GAME
    DOTA_GAMERULES_STATE_GAME_IN_PROGRESS
    DOTA_GAMERULES_STATE_POST_GAME
    DOTA_GAMERULES_STATE_DISCONNECT
    DOTA_GAMERULES_STATE_TEAM_SHOWCASE
    DOTA_GAMERULES_STATE_CUSTOM_GAME_SETUP
    DOTA_GAMERULES_STATE_LAST
}
declare var DOTA_GC_TEAM : DOTA_GC_TEAM;
interface DOTA_GC_TEAM{
    DOTA_GC_TEAM_GOOD_GUYS
    DOTA_GC_TEAM_BAD_GUYS
    DOTA_GC_TEAM_BROADCASTER
    DOTA_GC_TEAM_SPECTATOR
    DOTA_GC_TEAM_PLAYER_POOL
    DOTA_GC_TEAM_NOTEAM
}
declare var DOTAConnectionState_t : DOTAConnectionState_t;
interface DOTAConnectionState_t{
    DOTA_CONNECTION_STATE_UNKNOWN
    DOTA_CONNECTION_STATE_NOT_YET_CONNECTED
    DOTA_CONNECTION_STATE_CONNECTED
    DOTA_CONNECTION_STATE_DISCONNECTED
    DOTA_CONNECTION_STATE_ABANDONED
    DOTA_CONNECTION_STATE_LOADING
    DOTA_CONNECTION_STATE_FAILED
}
declare var dotaunitorder_t : dotaunitorder_t;
interface dotaunitorder_t{
    DOTA_UNIT_ORDER_NONE
    DOTA_UNIT_ORDER_MOVE_TO_POSITION
    DOTA_UNIT_ORDER_MOVE_TO_TARGET
    DOTA_UNIT_ORDER_ATTACK_MOVE
    DOTA_UNIT_ORDER_ATTACK_TARGET
    DOTA_UNIT_ORDER_CAST_POSITION
    DOTA_UNIT_ORDER_CAST_TARGET
    DOTA_UNIT_ORDER_CAST_TARGET_TREE
    DOTA_UNIT_ORDER_CAST_NO_TARGET
    DOTA_UNIT_ORDER_CAST_TOGGLE
    DOTA_UNIT_ORDER_HOLD_POSITION
    DOTA_UNIT_ORDER_TRAIN_ABILITY
    DOTA_UNIT_ORDER_DROP_ITEM
    DOTA_UNIT_ORDER_GIVE_ITEM
    DOTA_UNIT_ORDER_PICKUP_ITEM
    DOTA_UNIT_ORDER_PICKUP_RUNE
    DOTA_UNIT_ORDER_PURCHASE_ITEM
    DOTA_UNIT_ORDER_SELL_ITEM
    DOTA_UNIT_ORDER_DISASSEMBLE_ITEM
    DOTA_UNIT_ORDER_MOVE_ITEM
    DOTA_UNIT_ORDER_CAST_TOGGLE_AUTO
    DOTA_UNIT_ORDER_STOP
    DOTA_UNIT_ORDER_TAUNT
    DOTA_UNIT_ORDER_BUYBACK
    DOTA_UNIT_ORDER_GLYPH
    DOTA_UNIT_ORDER_EJECT_ITEM_FROM_STASH
    DOTA_UNIT_ORDER_CAST_RUNE
    DOTA_UNIT_ORDER_PING_ABILITY
    DOTA_UNIT_ORDER_MOVE_TO_DIRECTION
    DOTA_UNIT_ORDER_PATROL
    DOTA_UNIT_ORDER_VECTOR_TARGET_POSITION
    DOTA_UNIT_ORDER_RADAR
}
declare var DOTA_OVERHEAD_ALERT : DOTA_OVERHEAD_ALERT;
interface DOTA_OVERHEAD_ALERT{
    OVERHEAD_ALERT_GOLD
    OVERHEAD_ALERT_DENY
    OVERHEAD_ALERT_CRITICAL
    OVERHEAD_ALERT_XP
    OVERHEAD_ALERT_BONUS_SPELL_DAMAGE
    OVERHEAD_ALERT_MISS
    OVERHEAD_ALERT_DAMAGE
    OVERHEAD_ALERT_EVADE
    OVERHEAD_ALERT_BLOCK
    OVERHEAD_ALERT_BONUS_POISON_DAMAGE
    OVERHEAD_ALERT_HEAL
    OVERHEAD_ALERT_MANA_ADD
    OVERHEAD_ALERT_MANA_LOSS
    OVERHEAD_ALERT_LAST_HIT_EARLY
    OVERHEAD_ALERT_LAST_HIT_CLOSE
    OVERHEAD_ALERT_LAST_HIT_MISS
    OVERHEAD_ALERT_MAGICAL_BLOCK
}
declare var DOTA_HeroPickState : DOTA_HeroPickState;
interface DOTA_HeroPickState{
    DOTA_HEROPICK_STATE_NONE
    DOTA_HEROPICK_STATE_AP_SELECT
    DOTA_HEROPICK_STATE_SD_SELECT
    DOTA_HEROPICK_STATE_INTRO_SELECT
    DOTA_HEROPICK_STATE_RD_SELECT
    DOTA_HEROPICK_STATE_CM_INTRO
    DOTA_HEROPICK_STATE_CM_CAPTAINPICK
    DOTA_HEROPICK_STATE_CM_BAN1
    DOTA_HEROPICK_STATE_CM_BAN2
    DOTA_HEROPICK_STATE_CM_BAN3
    DOTA_HEROPICK_STATE_CM_BAN4
    DOTA_HEROPICK_STATE_CM_BAN5
    DOTA_HEROPICK_STATE_CM_BAN6
    DOTA_HEROPICK_STATE_CM_BAN7
    DOTA_HEROPICK_STATE_CM_BAN8
    DOTA_HEROPICK_STATE_CM_BAN9
    DOTA_HEROPICK_STATE_CM_BAN10
    DOTA_HEROPICK_STATE_CM_SELECT1
    DOTA_HEROPICK_STATE_CM_SELECT2
    DOTA_HEROPICK_STATE_CM_SELECT3
    DOTA_HEROPICK_STATE_CM_SELECT4
    DOTA_HEROPICK_STATE_CM_SELECT5
    DOTA_HEROPICK_STATE_CM_SELECT6
    DOTA_HEROPICK_STATE_CM_SELECT7
    DOTA_HEROPICK_STATE_CM_SELECT8
    DOTA_HEROPICK_STATE_CM_SELECT9
    DOTA_HEROPICK_STATE_CM_SELECT10
    DOTA_HEROPICK_STATE_CM_PICK
    DOTA_HEROPICK_STATE_AR_SELECT
    DOTA_HEROPICK_STATE_MO_SELECT
    DOTA_HEROPICK_STATE_FH_SELECT
    DOTA_HEROPICK_STATE_CD_INTRO
    DOTA_HEROPICK_STATE_CD_CAPTAINPICK
    DOTA_HEROPICK_STATE_CD_BAN1
    DOTA_HEROPICK_STATE_CD_BAN2
    DOTA_HEROPICK_STATE_CD_BAN3
    DOTA_HEROPICK_STATE_CD_BAN4
    DOTA_HEROPICK_STATE_CD_BAN5
    DOTA_HEROPICK_STATE_CD_BAN6
    DOTA_HEROPICK_STATE_CD_SELECT1
    DOTA_HEROPICK_STATE_CD_SELECT2
    DOTA_HEROPICK_STATE_CD_SELECT3
    DOTA_HEROPICK_STATE_CD_SELECT4
    DOTA_HEROPICK_STATE_CD_SELECT5
    DOTA_HEROPICK_STATE_CD_SELECT6
    DOTA_HEROPICK_STATE_CD_SELECT7
    DOTA_HEROPICK_STATE_CD_SELECT8
    DOTA_HEROPICK_STATE_CD_SELECT9
    DOTA_HEROPICK_STATE_CD_SELECT10
    DOTA_HEROPICK_STATE_CD_PICK
    DOTA_HEROPICK_STATE_BD_SELECT
    DOTA_HERO_PICK_STATE_ABILITY_DRAFT_SELECT
    DOTA_HERO_PICK_STATE_ARDM_SELECT
    DOTA_HEROPICK_STATE_ALL_DRAFT_SELECT
    DOTA_HERO_PICK_STATE_CUSTOMGAME_SELECT
    DOTA_HEROPICK_STATE_COUNT
}
declare var DOTATeam_t : DOTATeam_t;
interface DOTATeam_t{
    DOTA_TEAM_FIRST : DOTATeam_t
    DOTA_TEAM_GOODGUYS : DOTATeam_t
    DOTA_TEAM_BADGUYS : DOTATeam_t
    DOTA_TEAM_NEUTRALS : DOTATeam_t
    DOTA_TEAM_NOTEAM : DOTATeam_t
    DOTA_TEAM_CUSTOM_1 : DOTATeam_t
    DOTA_TEAM_CUSTOM_2 : DOTATeam_t
    DOTA_TEAM_CUSTOM_3 : DOTATeam_t
    DOTA_TEAM_CUSTOM_4 : DOTATeam_t
    DOTA_TEAM_CUSTOM_5 : DOTATeam_t
    DOTA_TEAM_CUSTOM_6 : DOTATeam_t
    DOTA_TEAM_CUSTOM_7 : DOTATeam_t
    DOTA_TEAM_CUSTOM_8 : DOTATeam_t
    DOTA_TEAM_COUNT : DOTATeam_t
    DOTA_TEAM_CUSTOM_MIN : DOTATeam_t
    DOTA_TEAM_CUSTOM_MAX : DOTATeam_t
    DOTA_TEAM_CUSTOM_COUNT : DOTATeam_t
}
declare var DOTA_RUNES : DOTA_RUNES;
interface DOTA_RUNES{
    DOTA_RUNE_INVALID : DOTA_RUNES
    DOTA_RUNE_DOUBLEDAMAGE : DOTA_RUNES
    DOTA_RUNE_HASTE : DOTA_RUNES
    DOTA_RUNE_ILLUSION : DOTA_RUNES
    DOTA_RUNE_INVISIBILITY : DOTA_RUNES
    DOTA_RUNE_REGENERATION : DOTA_RUNES
    DOTA_RUNE_BOUNTY : DOTA_RUNES
    DOTA_RUNE_ARCANE : DOTA_RUNES
    DOTA_RUNE_COUNT : DOTA_RUNES
}
declare var DOTA_UNIT_TARGET_TEAM : DOTA_UNIT_TARGET_TEAM;
interface DOTA_UNIT_TARGET_TEAM{
    DOTA_UNIT_TARGET_TEAM_NONE : DOTA_UNIT_TARGET_TEAM
    DOTA_UNIT_TARGET_TEAM_FRIENDLY : DOTA_UNIT_TARGET_TEAM
    DOTA_UNIT_TARGET_TEAM_ENEMY : DOTA_UNIT_TARGET_TEAM
    DOTA_UNIT_TARGET_TEAM_CUSTOM : DOTA_UNIT_TARGET_TEAM
    DOTA_UNIT_TARGET_TEAM_BOTH : DOTA_UNIT_TARGET_TEAM
}
declare var DOTA_UNIT_TARGET_TYPE : DOTA_UNIT_TARGET_TYPE;
interface DOTA_UNIT_TARGET_TYPE{

}
declare var DOTA_UNIT_TARGET_FLAGS : DOTA_UNIT_TARGET_FLAGS;
interface DOTA_UNIT_TARGET_FLAGS{

}
declare var DOTALimits_t : DOTALimits_t;
interface DOTALimits_t{

}
declare var DOTAInventoryFlags_t : DOTAInventoryFlags_t;
interface DOTAInventoryFlags_t{

}
declare var EDOTA_ModifyGold_Reason : EDOTA_ModifyGold_Reason;
interface EDOTA_ModifyGold_Reason{

}
declare var DOTAUnitAttackCapability_t : DOTAUnitAttackCapability_t;
interface DOTAUnitAttackCapability_t{

}
declare var DOTAUnitMoveCapability_t : DOTAUnitMoveCapability_t;
interface DOTAUnitMoveCapability_t{

}
declare var EShareAbility : EShareAbility;
interface EShareAbility{
    
}
declare var DOTAMusicStatus_t : DOTAMusicStatus_t;
interface DOTAMusicStatus_t{
    
}
declare var DOTA_ABILITY_BEHAVIOR : DOTA_ABILITY_BEHAVIOR;
interface DOTA_ABILITY_BEHAVIOR{
    
}
declare var DAMAGE_TYPES : DAMAGE_TYPES;
interface DAMAGE_TYPES{
    
}
declare var ABILITY_TYPES : ABILITY_TYPES;
interface ABILITY_TYPES{
    
}
declare var SPELL_IMMUNITY_TYPES : SPELL_IMMUNITY_TYPES;
interface SPELL_IMMUNITY_TYPES{
    
}
declare var DOTADamageFlag_t : DOTADamageFlag_t;
interface DOTADamageFlag_t{
    
}
declare var EDOTA_ModifyXP_Reason : EDOTA_ModifyXP_Reason;
interface EDOTA_ModifyXP_Reason{
    
}
declare var GameActivity_t : GameActivity_t;
interface GameActivity_t{
    
}
declare var DOTAMinimapEvent_t : DOTAMinimapEvent_t;
interface DOTAMinimapEvent_t{
    
}
declare var DOTASlotType_t : DOTASlotType_t;
interface DOTASlotType_t{
    
}
declare var modifierfunction : modifierfunction;
interface modifierfunction{
    
}
declare var modifierstate : modifierstate;
interface modifierstate{
    
}
declare var DOTAModifierAttribute_t : DOTAModifierAttribute_t;
interface DOTAModifierAttribute_t{
    
}
declare var Attributes : Attributes;
interface Attributes{
    
}
declare var ParticleAttachment_t : ParticleAttachment_t;
interface ParticleAttachment_t{
    
}
declare var DOTA_MOTION_CONTROLLER_PRIORITY : DOTA_MOTION_CONTROLLER_PRIORITY;
interface DOTA_MOTION_CONTROLLER_PRIORITY{
    
}
declare var DOTASpeechType_t : DOTASpeechType_t;
interface DOTASpeechType_t{
    
}
declare var DOTAAbilitySpeakTrigger_t : DOTAAbilitySpeakTrigger_t;
interface DOTAAbilitySpeakTrigger_t{
    
}
declare var DotaCustomUIType_t : DotaCustomUIType_t;
interface DotaCustomUIType_t{
    
}
declare var DotaDefaultUIElement_t : DotaDefaultUIElement_t;
interface DotaDefaultUIElement_t{
    
}
declare var PlayerUltimateStateOrTime_t : PlayerUltimateStateOrTime_t;
interface PlayerUltimateStateOrTime_t{
    
}
declare var PlayerOrderIssuer_t : PlayerOrderIssuer_t;
interface PlayerOrderIssuer_t{
    
}
declare var OrderQueueBehavior_t : OrderQueueBehavior_t;
interface OrderQueueBehavior_t{
    
}
declare var CLICK_BEHAVIORS : CLICK_BEHAVIORS;
interface CLICK_BEHAVIORS{
    
}
declare var AbilityLearnResult_t : AbilityLearnResult_t;
interface AbilityLearnResult_t{
    
}
