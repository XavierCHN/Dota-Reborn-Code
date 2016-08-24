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


interface CDOTA_PanoramaScript_GameEvents{
    /**
     * Subscribe to a game event
     */
    Subscribe( pEventName : string , funcVal : Function ) : number
    /**
     * Unsubscribe from a game event
     */
    Unsubscribe( nCallbackHandle : number ) 
    /**
     * Send a custom game event
     */
    SendCustomGameEventToServer( pEventName : string , eventArgs : Object )
    /**
     * Send a client-side event using gameeventmanager (only useful for a few specific events)
     */
    SendEventClientSide( pEventName : string , eventArgs : Object )
}

interface CDOTA_PanoramaScript_GameUI{

    /**
     *    Control whether the default UI is enabled
     */
    SetDefaultUIEnabled( nElementType : number , bVisible : boolean ) : void
    /**
     *   Get the current UI configuration
     */
    CustomUIConfig() : Object
    /**
     *   Create a minimap ping at the given location
     */
    PingMinimapAtLocation( vec3 : Array<number> ) : void
    /**
     *    Install a mouse input filter
     */
    SetMouseCallback( callbackFn : Function ) : void
    /**
     *    
     */
    EnableAliMode( bEnable : boolean , nPort : number ,  offsetVal : number , nScale : number )
    /**
     *    Get the current mouse position.
     */
    GetCursorPosition() : Array<number>
    /**
     *   Return the entity index of the entity under the given screen position.
     */
    FindScreenEntities( screenLocVec2: Array<number> ) : Array<any>
    /**
     *   Get the world position of the screen position, or null if the cursor is out of the world.
     */
    GetScreenWorldPosition( screenLocVec2: Array<number> ) : Array<number>
    /**
     *    Install a mouse input filter
     */
    WasMousePressed( nButtonNum : number ) : boolean
    /**
     *    Install a mouse input filter
     */
    WasMouseDoublePressed( nButtonNum : number ) : boolean
    /**
     *    Install a mouse input filter
     */
    IsMouseDown( nButtonNum : number ) : boolean
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
    SelectUnit( nEntityIndex : number , bAddToGroup : boolean )
    /**
     *    Set the minimum camera pitch angle.
     */
    SetCameraPitchMin( flPitchMin : number ) : void
    /**
     *    Set the maximum camera pitch angle.
     */
    SetCameraPitchMax( flPitchMax : number ) : void
    /**
     *    Set the camera's yaw.
     */
    SetCameraYaw( flCameraYaw : number ) : void
    /**
     *    Offset the camera's look at point.
     */
    SetCameraLookAtPositionHeightOffset( flCameraLookAtHeightOffset : number ) : void
    /**
     *    Set the camera distance from the look at point.
     */
    SetCameraDistance( flDistance : number ) : void
    /**
     *   Set the gap between the bottom of the screen and the game rendering viewport. (Value expressed as pixels in a normalized 1024x768 viewport.)
     */
    SetRenderBottomInsetOverride( nInset : number ) : void
    /**
     *    Set the gap between the top of the screen and the game rendering viewport. (Value expressed as pixels in a normalized 1024x768 viewport.)
     */
    SetRenderTopInsetOverride( nInset : number ) : void
    /**
     *   Set the camera target for the local player, or -1 to clear.
     */
    SetCameraTarget( nTargetEntIndex : number ) : void

}

interface CDOTA_PanoramaScript_CustomNetTables{

    /**
     *  Get a key from a custom net table
     */
    GetTableValue( pTableName : string , pKeyName : string ) 
    /**
     *  Get all values from a custom net table
     */
    GetAllTableValues( pTableName : string ) 
    /**
     *  Register a callback when a particular custom net table changes
     */
    SubscribeNetTableListener( tableName: string, callback:Function ) : any 
    /**
     *   Unsubscribe from a game event
     */
    UnsubscribeNetTableListener( nCallbackHandle : number ) : any

}

interface CScriptBindingPR_Players{

    /**
     * Get the maximum number of players in the game.
     */
    GetMaxPlayers() : number
    /**
     * Get the maximum number of players on teams.
     */
    GetMaxTeamPlayers() : number
    /**
     *  Get the local player ID.
     */
    GetLocalPlayer() : number
    /**
     *   Is the nth player a valid player?
     */
    IsValidPlayerID( iPlayerID : number ) : boolean
    /**
     *   Return the name of a player.
     */
    GetPlayerName( iPlayerID : number ) : string
    /**
     *  Get the entity index of the hero controlled by this player.
     */
    GetPlayerHeroEntityIndex( iPlayerID : number ) : number
    /**
     *   Get the entities this player has selected.
     */
    GetSelectedEntities( iPlayerID : number ) : Array<number>
    /**
     *  Get the entities this player is querying.
     */
    GetQueryUnit( iPlayerID : number ) : number
    /**
     *  Get local player current portrait unit. (ie. Player's hero or primary selected unit.)
     */
    GetLocalPlayerPortraitUnit() : number
    /**
     *  Can the player buy back?
     */
    CanPlayerBuyback( iPlayerID : number ) : boolean
    /**
     *  Does this player have a custom game ticket?
     */
    HasCustomGameTicketForPlayerID( iPlayerID : number ) : boolean
    /**
     *  The number of assists credited to a player.
     */
    GetAssists( iPlayerID : number ) : number
    /**
     *  
     */
    GetClaimedDenies( iPlayerID : number ) : number
    /**
     *  
     */
    GetClaimedMisses( iPlayerID : number ) : number
    /**
     *   The number of deaths a player has suffered.
     */
    GetDeaths( iPlayerID : number ) : number
    /**
     *   The number of denies credited to a player.
     */
    GetDenies( iPlayerID : number ) : number
    /**
     *   The amount of gold a player has.
     */
    GetGold( iPlayerID : number ) : number
    /**
     *  The number of kills credited to a player.
     */
    GetKills( iPlayerID : number ) : number
    /**
     *  
     */
    GetLastBuybackTime( iPlayerID : number ) : number
    /**
     *   
     */
    GetLastHitMultikill( iPlayerID : number ) : number
    /**
     *   The number of last hits credited to a player.
     */
    GetLastHits( iPlayerID : number ) : number
    /**
     *  
     */
    GetLastHitStreak( iPlayerID : number ) : number
    /**
     *  The current level of a player.
     */
    GetLevel( iPlayerID : number ) : number
    /**
     *   
     */
    GetMisses( iPlayerID : number ) : number
    /**
     *  
     */
    GetNearbyCreepDeaths( iPlayerID : number )
    /**
     *   Total reliable gold for this player.
     */
    GetReliableGold( iPlayerID : number ) : number
    /**
     *   
     */
    GetRespawnSeconds( iPlayerID : number ) : number
    /**
     *   
     */
    GetStreak( iPlayerID : number ) : number
    /**
     *  Total gold earned in this game by this player.
     */
    GetTotalEarnedGold( iPlayerID : number ) : number
    /**
     *  Total xp earned in this game by this player.
     */
    GetTotalEarnedXP( iPlayerID : number ) : number
    /**
     *   Total unreliable gold for this player.
     */
    GetUnreliableGold( iPlayerID : number ) : number
    /**
     *   Get the team this player is on.
     */
    GetTeam( iPlayerID : number ) : number
    /**
     *   Average gold earned per minute for this player.
     */
    GetGoldPerMin( iPlayerID : number ) : number
    /**
     *   Average xp earned per minute for this player.
     */
    GetXPPerMin( iPlayerID : number ) : number
    /**
     *   Return the name of the hero a player is controlling.
     */
    GetPlayerSelectedHero( iPlayerID : number ) : number
    /**
     *  Get the player color.
     */
    GetPlayerColor( iPlayerID : number ) : any
    /**
     *   Is this player a spectator.
     */
    IsSpectator( iPlayerID : number ) : boolean
    /**
     *   .
     */
    PlayerPortraitClicked( nClickedPlayerID : number , bHoldingCtrl : boolean ,  bHoldingAlt : boolean )
    /**
     *  .
     */
    BuffClicked( nEntity : number , nBuffSerial : number ,  bAlert : boolean )

}

interface CScriptBindingPR_Entities{
    /**
     *  Get the world origin of the entity.
     */
    GetAbsOrigin( nEntityIndex : number ) : Array<number>
    /**
     *  Get the forward vector of the entity.
     */
    GetForward( nEntityIndex : number ) : Array<number>
    /**
     *  Get the right vector of the entity.
     */
    GetRight( nEntityIndex : number ) : Array<number>
    /**
     *   Get the up vector of the entity.
     */
    GetUp( nEntityIndex : number ) : Array<number>
    /**
     * Get all the building 
     */
    GetAllBuildingEntities() : Array<number>
    /**
     * Get all the hero 
     */
    GetAllHeroEntities() : Array<number>
    /**
     *   Get all the entities with a given name.
     */
    GetAllEntitiesByName( pszName : string ) : Array<number>
    /**
     *  Get all the entities with a given classname.
     */
    GetAllEntitiesByClassname( pszName : string ) : Array<number>
    /**
     * Get all the creature 
     */
    GetAllCreatureEntities() : Array<number>
    /**
     * Get all the 
     */
    GetAllEntities() : Array<number>
    /**
     *  
     */
    CanBeDominated( nEntityIndex : number ) : boolean
    /**
     *   
     */
    HasAttackCapability( nEntityIndex : number ) : boolean
    /**
     *  
     */
    HasCastableAbilities( nEntityIndex : number ) : boolean
    /**
     *   
     */
    HasFlyingVision( nEntityIndex : number ) : boolean
    /**
     *  
     */
    HasFlyMovementCapability( nEntityIndex : number ) : boolean
    /**
     *   
     */
    HasGroundMovementCapability( nEntityIndex : number ) : boolean
    /**
     *   
     */
    HasMovementCapability( nEntityIndex : number ) : boolean
    /**
     *  
     */
    HasScepter( nEntityIndex : number ) : boolean
    /**
     *   
     */
    HasUpgradeableAbilities( nEntityIndex : number ) : boolean
    /**
     *   
     */
    HasUpgradeableAbilitiesThatArentMaxed( nEntityIndex : number ) : boolean
    /**
     *   
     */
    IsAlive( nEntityIndex : number ) : boolean
    /**
     *   
     */
    IsAncient( nEntityIndex : number ) : boolean
    /**
     *  
     */
    IsAttackImmune( nEntityIndex : number ) : boolean
    /**
     *  
     */
    IsBarracks( nEntityIndex : number ) : boolean
    /**
     *   
     */
    IsBlind( nEntityIndex : number ) : boolean
    /**
     *  
     */
    IsBoss( nEntityIndex : number ) : boolean
    /**
     *  
     */
    IsRoshan( nEntityIndex : number ) : boolean
    /**
     *  
     */
    IsBuilding( nEntityIndex : number ) : boolean
    /**
     *   
     */
    IsCommandRestricted( nEntityIndex : number ) : boolean
    /**
     *  
     */
    IsConsideredHero( nEntityIndex : number ) : boolean
    /**
     *   
     */
    IsControllableByAnyPlayer( nEntityIndex : number ) : boolean
    /**
     *   
     */
    IsCourier( nEntityIndex : number ) : boolean
    /**
     *  
     */
    IsCreature( nEntityIndex : number ) : boolean
    /**
     *   
     */
    IsCreep( nEntityIndex : number ) : boolean
    /**
     *   
     */
    IsCreepHero( nEntityIndex : number ) : boolean
    /**
     *  
     */
    IsDeniable( nEntityIndex : number ) : boolean
    /**
     *   
     */
    IsDominated( nEntityIndex : number ) : boolean
    /**
     *   
     */
    IsEnemy( nEntityIndex : number ) : boolean
    /**
     *   
     */
    IsEvadeDisabled( nEntityIndex : number ) : boolean
    /**
     *  
     */
    IsFort( nEntityIndex : number ) : boolean
    /**
     *  
     */
    IsFrozen( nEntityIndex : number ) : boolean
    /**
     *   
     */
    IsGeneratedByEconItem( nEntityIndex : number ) : boolean
    /**
     *  
     */
    IsHallofFame( nEntityIndex : number ) : boolean
    /**
     *  
     */
    IsDisarmed( nEntityIndex : number ) : boolean
    /**
     *  
     */
    IsHero( nEntityIndex : number ) : boolean
    /**
     *   
     */
    IsHexed( nEntityIndex : number ) : boolean
    /**
     *  
     */
    IsIllusion( nEntityIndex : number ) : boolean
    /**
     *   
     */
    IsInRangeOfFountain( nEntityIndex : number ) : boolean
    /**
     *  
     */
    IsInventoryEnabled( nEntityIndex : number ) : boolean
    /**
     *   
     */
    IsInvisible( nEntityIndex : number ) : boolean
    /**
     *  
     */
    IsInvulnerable( nEntityIndex : number ) : boolean
    /**
     *   
     */
    IsLaneCreep( nEntityIndex : number ) : boolean
    /**
     *   
     */
    IsLowAttackPriority( nEntityIndex : number ) : boolean
    /**
     *   
     */
    IsMagicImmune( nEntityIndex : number ) : boolean
    /**
     *  
     */
    IsMechanical( nEntityIndex : number ) : boolean
    /**
     *   
     */
    IsMuted( nEntityIndex : number ) : boolean
    /**
     *   
     */
    IsNeutralUnitType( nEntityIndex : number ) : boolean
    /**
     *  
     */
    IsNightmared( nEntityIndex : number ) : boolean
    /**
     *   
     */
    IsOther( nEntityIndex : number ) : boolean
    /**
     *   
     */
    IsOutOfGame( nEntityIndex : number ) : boolean
    /**
     *  
     */
    IsOwnedByAnyPlayer( nEntityIndex : number ) : boolean
    /**
     *   
     */
    IsPhantom( nEntityIndex : number ) : boolean
    /**
     *  
     */
    IsRangedAttacker( nEntityIndex : number ) : boolean
    /**
     *  
     */
    IsRealHero( nEntityIndex : number ) : boolean
    /**
     *  
     */
    IsRooted( nEntityIndex : number ) : boolean
    /**
     *  
     */
    IsSelectable( nEntityIndex : number ) : boolean
    /**
     *  
     */
    IsShop( nEntityIndex : number ) : boolean
    /**
     *  
     */
    IsSilenced( nEntityIndex : number ) : boolean
    /**
     *   
     */
    IsSpeciallyDeniable( nEntityIndex : number ) : boolean
    /**
     *   
     */
    IsStunned( nEntityIndex : number ) : boolean
    /**
     *  
     */
    IsSummoned( nEntityIndex : number ) : boolean
    /**
     *   
     */
    IsTower( nEntityIndex : number ) : boolean
    /**
     *  
     */
    IsUnselectable( nEntityIndex : number ) : boolean
    /**
     *  
     */
    IsWard( nEntityIndex : number ) : boolean
    /**
     *  
     */
    IsZombie( nEntityIndex : number ) : boolean
    /**
     *   
     */
    NoHealthBar( nEntityIndex : number )  : boolean
    /**
     *  
     */
    NoTeamMoveTo( nEntityIndex : number ) : boolean
    /**
     *  
     */
    NoTeamSelect( nEntityIndex : number ) : boolean
    /**
     *  
     */
    NotOnMinimap( nEntityIndex : number ) : boolean
    /**
     *  
     */
    NotOnMinimapForEnemies( nEntityIndex : number ) : boolean
    /**
     *   
     */
    NoUnitCollision( nEntityIndex : number ) : boolean
    /**
     *  
     */
    PassivesDisabled( nEntityIndex : number ) : boolean
    /**
     *  
     */
    ProvidesVision( nEntityIndex : number ) : boolean
    /**
     *  
     */
    UsesHeroAbilityNumbers( nEntityIndex : number )
    /**
     *   
     */
    GetAbilityCount( nEntityIndex : number ) :number
    /**
     *  
     */
    GetCombatClassAttack( nEntityIndex : number ) : any
    /**
     *  
     */
    GetCombatClassDefend( nEntityIndex : number ) :any
    /**
     *   
     */
    GetCurrentVisionRange( nEntityIndex : number ) : number
    /**
     *  
     */
    GetDamageBonus( nEntityIndex : number ) : number
    /**
     *  
     */
    GetDamageMax( nEntityIndex : number ) : number
    /**
     *  
     */
    GetDamageMin( nEntityIndex : number ) : number
    /**
     *   
     */
    GetDayTimeVisionRange( nEntityIndex : number ) : number
    /**
     *   
     */
    GetHealth( nEntityIndex : number ) : number
    /**
     *  
     */
    GetHealthPercent( nEntityIndex : number ) : number
    /**
     *   
     */
    GetHealthThinkRegen( nEntityIndex : number ) : number
    /**
     *  
     */
    GetLevel( nEntityIndex : number ) : number
    /**
     *  
     */
    GetMaxHealth( nEntityIndex : number ) : number
    /**
     *   
     */
    GetNightTimeVisionRange( nEntityIndex : number ) : number
    /**
     *   
     */
    GetStates( nEntityIndex : number ) : number
    /**
     *  
     */
    GetTotalPurchasedUpgradeGoldCost( nEntityIndex : number ) : number
    /**
     *   
     */
    GetTeamNumber( nEntityIndex : number ) : number
    /**
     *  
     */
    GetAttackRange( nEntityIndex : number ) : number
    /**
     *  
     */
    GetAttackSpeed( nEntityIndex : number ) : number
    /**
     *   
     */
    GetAttacksPerSecond( nEntityIndex : number ) : number
    /**
     *   
     */
    GetBaseAttackTime( nEntityIndex : number ) : number
    /**
     *   
     */
    GetBaseMagicalResistanceValue( nEntityIndex : number ) : number
    /**
     *  
     */
    GetBaseMoveSpeed( nEntityIndex : number ) : number
    /**
     *   
     */
    GetBonusPhysicalArmor( nEntityIndex : number ) : number
    /**
     *   
     */
    GetCollisionPadding( nEntityIndex : number ) : number
    /**
     *   
     */
    GetEffectiveInvisibilityLevel( nEntityIndex : number ) : number
    /**
     *  
     */
    GetHasteFactor( nEntityIndex : number ) : number
    /**
     *   
     */
    GetHullRadius( nEntityIndex : number ) : number
    /**
     *   
     */
    GetIdealSpeed( nEntityIndex : number ) : number
    /**
     *   
     */
    GetIncreasedAttackSpeed( nEntityIndex : number ) : number
    /**
     *   
     */
    GetMana( nEntityIndex : number ) : number
    /**
     *   
     */
    GetManaThinkRegen( nEntityIndex : number ) : number
    /**
     *  
     */
    GetMaxMana( nEntityIndex : number ) : number
    /**
     *  
     */
    GetMagicalArmorValue( nEntityIndex : number ) : number
    /**
     *  
     */
    GetPaddedCollisionRadius( nEntityIndex : number ) : number
    /**
     *   
     */
    GetPercentInvisible( nEntityIndex : number ) : number
    /**
     *   
     */
    GetPhysicalArmorValue( nEntityIndex : number ) : number
    /**
     *  
     */
    GetProjectileCollisionSize( nEntityIndex : number ) : number
    /**
     *   
     */
    GetRingRadius( nEntityIndex : number ) : number
    /**
     *   
     */
    GetSecondsPerAttack( nEntityIndex : number ) : number
    /**
     *  
     */
    ManaFraction( nEntityIndex : number ) : number
    /**
     *  
     */
    GetClassname( nEntityIndex : number ) : string
    /**
     *  
     */
    GetDisplayedUnitName( nEntityIndex : number ) : string
    /**
     *   
     */
    GetSelectionGroup( nEntityIndex : number ) : string
    /**
     *   
     */
    GetSoundSet( nEntityIndex : number ) : string
    /**
     *  
     */
    GetUnitLabel( nEntityIndex : number ) : string
    /**
     *   
     */
    GetUnitName( nEntityIndex : number ) : string
    /**
     *   
     */
    GetTotalDamageTaken( nEntityIndex : number ) : number
    /**
     *  
     */
    IsControllableByPlayer( nEntityIndex : number , nPlayerIndex : number ) : boolean
    /**
     *   
     */
    GetChosenTarget( nEntityIndex : number ) : number
    /**
     *   
     */
    HasItemInInventory( nEntityIndex : number , pItemName : string ) : boolean
    /**
     *   
     */
    GetRangeToUnit( nEntityIndex : number , nEntityIndex2 : number ) : number
    /**
     *   
     */
    IsEntityInRange( nEntityIndex : number , nEntityIndex2 : number ,  flRange : number ) : boolean
    /**
     *   
     */
    GetMoveSpeedModifier( nEntityIndex : number , flBaseSpeed : number ) : any
    /**
     *  
     */
    CanAcceptTargetToAttack( nEntityIndex : number , nEntityIndex2 : number ) : boolean
    /**
     *   
     */
    InState( nEntityIndex : number , nState : number )
    /**
     *  
     */
    GetArmorForDamageType( nEntityIndex : number , iDamageType : number )
    /**
     *   
     */
    GetArmorReductionForDamageType( nEntityIndex : number , iDamageType : number )
    /**
     *   
     */
    IsInRangeOfShop( nEntityIndex : number , iShopType : number ,  bSpecific : boolean ) : boolean
    /**
     *  
     */
    GetNumItemsInStash( nEntityIndex : number )
    /**
     *  
     */
    GetNumItemsInInventory( nEntityIndex : number )
    /**
     *   
     */
    GetItemInSlot( nEntityIndex : number , nSlotIndex : number )
    /**
     *  
     */
    GetAbility( nEntityIndex : number , nSlotIndex : number )
    /**
     *  
     */
    GetAbilityByName( nEntityIndex : number , pszAbilityName : string )
    /**
     *   
     */
    GetNumBuffs( nEntityIndex : number )
    /**
     *  
     */
    GetBuff( nEntityIndex : number , nBufIndex : number )
    /**
     *  
     */
    GetAbilityPoints( nEntityIndex : number )
    /**
     *  
     */
    GetCurrentXP( nEntityIndex : number )
    /**
     *  
     */
    GetNeededXPToLevel( nEntityIndex : number )
    /**
     *  Get the currently selected entities
     */
    GetSelectionEntities( nEntityIndex : number )
    /**
     *   Is this a valid entity index?
     */
    IsValidEntity( nEntityIndex : number ) : boolean
    /**
     *  Is this entity an item container in the world?
     */
    IsItemPhysical( nEntityIndex : number ) : boolean
    /**
     *  Get the item contained in this physical item container.
     */
    GetContainedItem( nEntityIndex : number )

}

interface CScriptBindingPR_Abilities{
    /**
     *  
     */
    GetAbilityName( nEntityIndex : number ) 
    /**
     * 
     */
    GetAbilityTextureName( nEntityIndex : number ) 
    /**
     * 
     */
    GetAssociatedPrimaryAbilities( nEntityIndex : number ) 
    /**
     * 
     */
    GetAssociatedSecondaryAbilities( nEntityIndex : number ) 
    /**
     * 
     */
    GetHotkeyOverride( nEntityIndex : number ) 
    /**
     *  
     */
    GetIntrinsicModifierName( nEntityIndex : number ) 
    /**
     * 
     */
    GetSharedCooldownName( nEntityIndex : number ) 
    /**
     *  
     */
    AbilityReady( nEntityIndex : number ) 
    /**
     *  Returns an AbilityLearnResult_t
     */
    CanAbilityBeUpgraded( nEntityIndex : number ) : number
    /**
     * 
     */
    CanBeExecuted( nEntityIndex : number ) : boolean
    /**
     *  
     */
    GetAbilityDamage( nEntityIndex : number ) 
    /**
     *  
     */
    GetAbilityDamageType( nEntityIndex : number ) 
    /**
     * 
     */
    GetAbilityTargetFlags( nEntityIndex : number ) 
    /**
     *  
     */
    GetAbilityTargetTeam( nEntityIndex : number ) 
    /**
     *  
     */
    GetAbilityTargetType( nEntityIndex : number ) 
    /**
     *  
     */
    GetAbilityType( nEntityIndex : number ) 
    /**
     * 
     */
    GetBehavior( nEntityIndex : number ) 
    /**
     *  
     */
    GetCastRange( nEntityIndex : number ) 
    /**
     *  
     */
    GetChannelledManaCostPerSecond( nEntityIndex : number ) 
    /**
     * 
     */
    GetCurrentCharges( nEntityIndex : number ) 
    /**
     * 
     */
    GetEffectiveLevel( nEntityIndex : number ) 
    /**
     * 
     */
    GetHeroLevelRequiredToUpgrade( nEntityIndex : number ) 
    /**
     *  
     */
    GetLevel( nEntityIndex : number ) 
    /**
     * 
     */
    GetManaCost( nEntityIndex : number ) 
    /**
     * 
     */
    GetMaxLevel( nEntityIndex : number ) 
    /**
     *  
     */
    AttemptToUpgrade( nEntityIndex : number ) 
    /**
     *  
     */
    CanLearn( nEntityIndex : number ) 
    /**
     *  
     */
    GetAutoCastState( nEntityIndex : number ) 
    /**
     *  
     */
    GetToggleState( nEntityIndex : number ) 
    /**
     *  
     */
    HasScepterUpgradeTooltip( nEntityIndex : number ) 
    /**
     * 
     */
    IsActivated( nEntityIndex : number )  : boolean
    /**
     * 
     */
    IsActivatedChanging( nEntityIndex : number )  : boolean
    /**
     *  
     */
    IsAttributeBonus( nEntityIndex : number )  : boolean
    /**
     *  
     */
    IsAutocast( nEntityIndex : number )  : boolean
    /**
     * 
     */
    IsCooldownReady( nEntityIndex : number )  : boolean
    /**
     *  
     */
    IsDisplayedAbility( nEntityIndex : number )  : boolean
    /**
     *  
     */
    IsHidden( nEntityIndex : number )  : boolean
    /**
     *  
     */
    IsHiddenWhenStolen( nEntityIndex : number )  : boolean
    /**
     *  
     */
    IsInAbilityPhase( nEntityIndex : number )  : boolean
    /**
     *  
     */
    IsItem( nEntityIndex : number )  : boolean
    /**
     * 
     */
    IsMarkedAsDirty( nEntityIndex : number )  : boolean
    /**
     * 
     */
    IsMuted( nEntityIndex : number )  : boolean
    /**
     * 
     */
    IsOnCastbar( nEntityIndex : number )  : boolean
    /**
     *  
     */
    IsOnLearnbar( nEntityIndex : number )  : boolean
    /**
     *  
     */
    IsOwnersGoldEnough( nEntityIndex : number )  : boolean
    /**
     *  
     */
    IsOwnersGoldEnoughForUpgrade( nEntityIndex : number )  : boolean
    /**
     *  
     */
    IsOwnersManaEnough( nEntityIndex : number )  : boolean
    /**
     * 
     */
    IsPassive( nEntityIndex : number )  : boolean
    /**
     *  
     */
    IsRecipe( nEntityIndex : number )  : boolean
    /**
     * 
     */
    IsSharedWithTeammates( nEntityIndex : number )  : boolean
    /**
     * 
     */
    IsStealable( nEntityIndex : number )  : boolean
    /**
     *  
     */
    IsStolen( nEntityIndex : number )  : boolean
    /**
     *  
     */
    IsToggle( nEntityIndex : number )  : boolean
    /**
     *  
     */
    GetAOERadius( nEntityIndex : number ) 
    /**
     *  
     */
    GetBackswingTime( nEntityIndex : number ) 
    /**
     *  
     */
    GetCastPoint( nEntityIndex : number ) 
    /**
     * 
     */
    GetChannelStartTime( nEntityIndex : number ) 
    /**
     *  
     */
    GetChannelTime( nEntityIndex : number ) 
    /**
     * 
     */
    GetCooldown( nEntityIndex : number ) 
    /**
     * 
     */
    GetCooldownLength( nEntityIndex : number ) 
    /**
     * 
     */
    GetCooldownTime( nEntityIndex : number ) 
    /**
     *  
     */
    GetCooldownTimeRemaining( nEntityIndex : number ) 
    /**
     * 
     */
    GetDuration( nEntityIndex : number ) 
    /**
     * 
     */
    GetUpgradeBlend( nEntityIndex : number ) 
    /**
     * Get the local player's current active ability. (Pre-cast targetting state.)
     */
    GetLocalPlayerActiveAbility()
    /**
     *  
     */
    GetCaster( nAbilityIndex : number ) 
    /**
     * 
     */
    GetCustomValueFor( nAbilityIndex : number , pszAbilityVarName : string ) 
    /**
     *  
     */
    GetLevelSpecialValueFor( nAbilityIndex : number , szName : string ,  nLevel : number ) 
    /**
     * 
     */
    GetSpecialValueFor( nAbilityIndex : number , szName : string ) 
    /**
     * 
     */
    IsCosmetic( nAbilityIndex : number , nTargetEntityIndex : number )  : boolean
    /**
     * Attempt to execute the specified ability (Equivalent to clicking the ability in the HUD action bar)
     */
    ExecuteAbility( nAbilityEntIndex : number , nCasterEntIndex : number ,  bIsQuickCast : boolean ) 
    /**
     * Attempt to double-tap (self-cast) the specified ability (Equivalent to double-clicking the ability in the HUD action bar)
     */
    CreateDoubleTapCastOrder( nAbilityEntIndex : number , nCasterEntIndex : number ) 
    /**
     *  Ping the specified ability (Equivalent to alt-clicking the ability in the HUD action bar)
     */
    PingAbility( nAbilityIndex : number ) 
    /**
     *  Returns the keybind (as a string) for the specified ability.
     */
    GetKeybind( nAbilityEntIndex : number ) 

}

interface CScriptBindingPR_Items extends CScriptBindingPR_Abilities{
    /**
     *   
     */
    ShouldDisplayCharges( nEntityIndex : number )
    /**
     *   
     */
    AlwaysDisplayCharges( nEntityIndex : number )
    /**
     *   
     */
    ShowSecondaryCharges( nEntityIndex : number )
    /**
     *   
     */
    CanBeSoldByLocalPlayer( nEntityIndex : number )
    /**
     *   
     */
    CanDoubleTapCast( nEntityIndex : number )
    /**
     *   
     */
    ForceHideCharges( nEntityIndex : number )
    /**
     *  
     */
    IsAlertableItem( nEntityIndex : number ) : boolean
    /**
     *   
     */
    IsCastOnPickup( nEntityIndex : number ) : boolean
    /**
     *   
     */
    IsDisassemblable( nEntityIndex : number ) : boolean
    /**
     *  
     */
    IsDroppable( nEntityIndex : number ) : boolean
    /**
     *   
     */
    IsInnatelyDisassemblable( nEntityIndex : number ) : boolean
    /**
     *   
     */
    IsKillable( nEntityIndex : number ) : boolean
    /**
     *  
     */
    IsMuted( nEntityIndex : number ) : boolean
    /**
     *  
     */
    IsPermanent( nEntityIndex : number ) : boolean
    /**
     *  
     */
    IsPurchasable( nEntityIndex : number ) : boolean
    /**
     *   
     */
    IsRecipe( nEntityIndex : number ) : boolean
    /**
     *  
     */
    IsRecipeGenerated( nEntityIndex : number ) : boolean
    /**
     *   
     */
    IsSellable( nEntityIndex : number ) : boolean
    /**
     *  
     */
    IsStackable( nEntityIndex : number ) : boolean
    /**
     *   
     */
    ProRatesChargesWhenSelling( nEntityIndex : number )
    /**
     *  
     */
    RequiresCharges( nEntityIndex : number )
    /**
     *  
     */
    CanBeExecuted( nEntityIndex : number )
    /**
     *  
     */
    GetCost( nEntityIndex : number )
    /**
     *  
     */
    GetCurrentCharges( nEntityIndex : number )
    /**
     *  
     */
    GetSecondaryCharges( nEntityIndex : number )
    /**
     *  
     */
    GetDisplayedCharges( nEntityIndex : number )
    /**
     *  
     */
    GetInitialCharges( nEntityIndex : number )
    /**
     *   
     */
    GetItemColor( nEntityIndex : number )
    /**
     *  
     */
    GetShareability( nEntityIndex : number )
    /**
     *  
     */
    GetAbilityTextureSF( nEntityIndex : number )
    /**
     *   
     */
    GetAssembledTime( nEntityIndex : number )
    /**
     *  
     */
    GetPurchaseTime( nEntityIndex : number )
    /**
     *  
     */
    GetPurchaser( nItemID : number )
    /**
     *  Attempt to have the local player disassemble the specified item. Returns false if the order wasn't issued.
     */
    LocalPlayerDisassembleItem( nItem : number )
    /**
     *  Attempt to have the local player drop the specified item from its stash. Returns false if the order wasn't issued.
     */
    LocalPlayerDropItemFromStash( nItem : number )
    /**
     *  Attempt to have the local player alert allies about the specified item. Returns false if the order wasn't issued.
     */
    LocalPlayerItemAlertAllies( nItem : number )
    /**
     *  Attempt to have the local player move the specified item to its stash. Returns false if the order wasn't issued.
     */
    LocalPlayerMoveItemToStash( nItem : number )
    /**
     *   Attempt to have the local player sell the specified item. Returns false if the order wasn't issued.
     */
    LocalPlayerSellItem( nItem : number )

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
    WorldToScreenX( x : number , y : number ,  z : number ) 
    /**
     *  Converts the specified x,y,z world co-ordinate into a y screen coordinate. Returns -1 if behind the camera
     */
    WorldToScreenY( x : number , y : number ,  z : number ) 
    /**
     *  Converts the specified x, y screen coordinates into a x, y, z world coordinates.
     */
    ScreenXYToWorld( nX : number , nY : number ) 
    /**
     *  Returns the keybind (as a string) for the requested ability slot.
     */
    GetKeybindForAbility( iSlot : number ) 
    /**
     * 
     */
    GetNianFightTimeLeft()
    /**
     * 
     */
    GetState() : DOTA_GameState
    /**
     *  
     */
    GameStateIs( nState : number )  : boolean
    /**
     *  
     */
    GameStateIsBefore( nState : number )  : boolean
    /**
     * 
     */
    GameStateIsAfter( nState : number )  : boolean
    /**
     *  
     */
    AddCommand( pszCommandName : string , callback : js_value ,  pszDescription : string , nFlags : number ) 
    /**
     * 
     */
    GetLocalPlayerID()
    /**
     *  Assign the local player to the specified team
     */
    PlayerJoinTeam( nTeamID : number ) 
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
    SetRemainingSetupTime( flSeconds : number )  : void
    /**
     *  Set the amount of time in seconds that will be set as the remaining time when all players are assigned to a team.
     */
    SetAutoLaunchDelay( flSeconds : number )  : void
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
    GetPlayerUltimateStateOrTime( nPlayerID : number ) 
    /**
     * Whether the local player has muted text and voice chat for the specified player id
     */
    IsPlayerMuted( nPlayerID : number )  : boolean
    /**
     *  Set whether the local player has muted text and voice chat for the specified player id
     */
    SetPlayerMuted( nPlayerID : number , bMuted : boolean )  : void
    /**
     *  Get detailed information for the given team
     */
    GetTeamDetails( nTeam : number ) 
    /**
     * Get details for the local player
     */
    GetLocalPlayerInfo()
    /**
     *  Get info about the player items.
     */
    GetPlayerItems( nPlayerID : number ) 
    /**
     * Get info about the given player
     */
    GetPlayerInfo( nPlayerID : number ) 
    /**
     *  Get player IDs for the given team
     */
    GetPlayerIDsOnTeam( nTeam : number ) 
    /**
     *  
     */
    ServerCmd( pMsg : string ) 
    /**
     * 
     */
    FinishGame()
    /**
     * Emit a sound for the local player. Returns an number handle that can be passed to StopSound. (Returns 0 on failure.)
     */
    EmitSound( pSoundEventName : string ) 
    /**
     * Stop a current playing sound on the local player. Takes handle from a call to EmitSound.
     */
    StopSound( nHandle : number ) 
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
    DropItemAtCursor( nControlledUnitEnt : number , nItemEnt : number ) 
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
    DispatchEventAsync( delay:number, eventName: string, eventArgs: any) : void
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
    Schedule( delay:number, callback:Function ) : Function
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
    visible : boolean
    enabled : boolean
    checked : boolean
    defaultfocus : boolean
    inputnamespace : boolean
    hittest : boolean
    hittestchildren : boolean
    tabindex : number
    selectionpos_x : number
    selectionpos_y :number
    id : string
    layoutfile : string
    contentwidth : number
    contentheight : number
    desiredlayoutwidth : number
    desiredlayoutheight : number
    actuallayoutwidth : number
    actuallayoutheight : number
    actualxoffset : number
    actualyoffset : number
    scrolloffset_y : number
    scrolloffset_x : number
    style : any
    AddClass( className : string ) : void
    RemoveClass( className :  string ) : void
    BHasClass( className :  string ) : boolean
    SetHasClass( className : string , onoff : boolean ) : void
    ToggleClass( className : string )
    ClearPanelEvent( eventName : string )
    SetDraggable( draggable : boolean ) : void
    IsDraggable() : boolean
    GetChildCount() : number
    GetChild( childIndex : number ) : Panel
    GetChildIndex( unknown_variant_type_1 : unknown_variant_type )
    Children() : Array<Panel>
    FindChildrenWithClassTraverse( className : string ) : Array<Panel>
    GetParent() : Panel
    SetParent( parent : Panel ) : void
    FindChild( id : string ) : Panel
    FindChildTraverse( id : string ) : Panel
    FindChildInLayoutFile( id : string ) : Panel
    RemoveAndDeleteChildren() : void
    MoveChildBefore( panel1 : Panel , panel2 : Panel )
    MoveChildAfter( panel1 : Panel , panel2 : Panel )
    GetPositionWithinWindow()
    ApplyStyles( boolean_1 : boolean )
    ClearPropertyFromCode( unknown_variant_type_1 : unknown_variant_type )
    DeleteAsync( delay : number )
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
    BLoadLayout( layoutFilePath : string , boolean_2 : boolean ,  boolean_3 : boolean ) : boolean
    BLoadLayoutSnippet(SnippetName: string) : boolean
    BLoadLayoutFromString( js_raw_args_1 : js_raw_args ) : boolean
    LoadLayoutFromStringAsync( string_1 : string , boolean_2 : boolean ,  boolean_3 : boolean )
    LoadLayoutAsync( string_1 : string , boolean_2 : boolean ,  boolean_3 : boolean )
    BCreateChildren( string_1 : string ) : boolean
    SetTopOfInputContext( boolean_1 : boolean ) : void
    SetDialogVariable( string_1 : string , string_2 : string ) : void
    SetDialogVariableInt( string_1 : string , number_2 : number ) : void
    ScrollToTop()
    ScrollToBottom()
    ScrollToLeftEdge()
    ScrollToRightEdge()
    ScrollParentToMakePanelFit( unknown_variant_type_1 : unknown_variant_type , boolean_2 : boolean )
    BCanSeeInParentScroll() : boolean
    GetAttributeInt( string_1 : string , number_2 : number )
    GetAttributeString( string_1 : string , string_2 : string )
    GetAttributeUInt32( string_1 : string , number_2 : number )
    SetAttributeInt( string_1 : string , number_2 : number ) : void
    SetAttributeString( string_1 : string , string_2 : string ) : void
    SetAttributeUInt32( string_1 : string , number_2 : number ) : void
    SetInputNamespace( string_1 : string ) : void
    RegisterForReadyEvents( boolean_1 : boolean )
    BReadyForDisplay() : boolean
    SetReadyForDisplay( boolean_1 : boolean ) : void
    SetPanelEvent( eventName: string, callback:Function ) : void
    rememberchildfocus : boolean
    paneltype : string
}

interface Button extends Panel{
}

interface Label extends Panel{
    text( string_1 : string )
    html( boolean_1 : boolean )
}

interface DOTAAvatarImage extends Panel{
    steamid : number
    accountid : number
}

interface CustomUIElement extends Panel{
    //没有多内容
}

interface DOTAAbilityImage extends Panel{
    SetImage( string_1 : string ) : void
    SetScaling( string_1 : string ) : void
    abilityname : string
    contextEntityIndex : number
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
