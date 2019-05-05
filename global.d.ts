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
declare var Particles : CParticles;

type js_raw_args = any;
type unknown_variant_type = any;
type js_value = any;
type js_object = Object;

declare interface CParticles {
    /**
     * Create a particle system
     * @param pParticleName
     * @param nAttachType ParticleAttachment_t
     * @param nEntityToAttach 
     */
    CreateParticle(pParticleName: string, nAttachType: number, nEntityToAttach:number ): number;

    /**
     * Destroy a particle system
     * @param iIndex 
     * @param bDestroyImmediately
     */
    DestroyParticleEffect(iIndex: number, bDestroyImmediately: boolean): void;

    /**
     * Release a particle system
     * @param iIndex 
     */
    ReleaseParticleIndex(iIndex: number): void;

    /**
     * Set a control point on a particle system
     * @param iIndex 
     * @param iPoint 
     * @param vPosVal 
     */
    SetParticleControl( iIndex: number, iPoint: number, vPosVal: number[] ): void;

    /**
     * Set the orientation on a control point on a particle system
     * @param iIndex 
     * @param iPoint 
     * @param vForwardVal 
     */
    SetParticleControlForward( iIndex: number, iPoint: number, vForwardVal: number[] ): void;

    SetParticleAlwaysSimulate( iIndex: number ): void;

    /**
     * Set a control point to track an entity on a particle system
     * @param iIndex 
     * @param iPoint 
     * @param iEntIndex 
     * @param iAttachType ParticleAttachment_t
     * @param pszAttachName "attach_hitloc"
     * @param vecFallbackPositionVal 
     * @param bIncludeWearables 
     */
    SetParticleControlEnt( iIndex: number, iPoint: number, iEntIndex: number, iAttachType: number, pszAttachName: string, vecFallbackPositionVal: number[], bIncludeWearables: boolean ): void;
}

interface CDOTA_PanoramaScript_GameEvents{
    /**
     * Subscribe to a game event
     */
    Subscribe( pEventName : string , funcVal : Function ) : number
    /**
     * Unsubscribe from a game event
     */
    Unsubscribe( nCallbackHandle : number ) : void
    /**
     * Send a custom game event
     */
    SendCustomGameEventToServer( pEventName : string , eventArgs : Object ): void
    /**
     * Send a client-side event using gameeventmanager (only useful for a few specific events)
     */
    SendEventClientSide( pEventName : string , eventArgs : Object ): void
}

interface CDOTA_PanoramaScript_GameUI{

    /**
     *    Control whether the default UI is enabled
     */
    SetDefaultUIEnabled( nElementType : number , bVisible : boolean ) : void
    /**
     *   Get the current UI configuration
     */
    CustomUIConfig() : any
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
    EnableAliMode( bEnable : boolean , nPort : number ,  offsetVal : number , nScale : number ): void
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
    SelectUnit( nEntityIndex : number , bAddToGroup : boolean ): void
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

    WorldToScreenXYClamped( vec: number[] ): number[]

    /**
     * Set the camera target as position for the local player over specified lerp.
     * @param vec 
     * @param lerp 
     */
    SetCameraTargetPosition( vec: any, lerp: number): void

}

interface CDOTA_PanoramaScript_CustomNetTables{

    /**
     *  Get a key from a custom net table
     */
    GetTableValue( pTableName : string , pKeyName : string ) : any
    /**
     *  Get all values from a custom net table
     */
    GetAllTableValues( pTableName : string ) : any
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
    GetNearbyCreepDeaths( iPlayerID : number ): any
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
    GetPlayerSelectedHero( iPlayerID : number ) : string
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
    PlayerPortraitClicked( nClickedPlayerID : number , bHoldingCtrl : boolean ,  bHoldingAlt : boolean ): void
    /**
     *  .
     */
    BuffClicked( nEntity : number , nBuffSerial : number ,  bAlert : boolean ): void

}

interface CScriptBindingPR_Entities{
    GetPlayerOwnerID( nEntityIndex : number ): number
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
    UsesHeroAbilityNumbers( nEntityIndex : number ): void
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
    InState( nEntityIndex : number , nState : number ): boolean
    /**
     *  
     */
    GetArmorForDamageType( nEntityIndex : number , iDamageType : number ): number
    /**
     *   
     */
    GetArmorReductionForDamageType( nEntityIndex : number , iDamageType : number ): number
    /**
     *   
     */
    IsInRangeOfShop( nEntityIndex : number , iShopType : number ,  bSpecific : boolean ) : boolean
    /**
     *  
     */
    GetNumItemsInStash( nEntityIndex : number ): number
    /**
     *  
     */
    GetNumItemsInInventory( nEntityIndex : number ): number
    /**
     *   
     */
    GetItemInSlot( nEntityIndex : number , nSlotIndex : number ): number
    /**
     *  
     */
    GetAbility( nEntityIndex : number , nSlotIndex : number ): number
    /**
     *  
     */
    GetAbilityByName( nEntityIndex : number , pszAbilityName : string ): string
    /**
     *   
     */
    GetNumBuffs( nEntityIndex : number ): number
    /**
     *  
     */
    GetBuff( nEntityIndex : number , nBufIndex : number ): any
    /**
     *  
     */
    GetAbilityPoints( nEntityIndex : number ): number
    /**
     *  
     */
    GetCurrentXP( nEntityIndex : number ): number
    /**
     *  
     */
    GetNeededXPToLevel( nEntityIndex : number ): number
    /**
     *  Get the currently selected entities
     */
    GetSelectionEntities( nEntityIndex : number ): number[]
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
    GetContainedItem( nEntityIndex : number ): number

    HasModifier(nEntityIndex : number, name: string): boolean;

}

interface CScriptBindingPR_Abilities{
    /**
     *  
     */
    GetAbilityName( nEntityIndex : number ) : string
    /**
     * 
     */
    GetAbilityTextureName( nEntityIndex : number ) : string
    /**
     * 
     */
    GetAssociatedPrimaryAbilities( nEntityIndex : number ) : number[]
    /**
     * 
     */
    GetAssociatedSecondaryAbilities( nEntityIndex : number ) : number[]
    /**
     * 
     */
    GetHotkeyOverride( nEntityIndex : number ) : string
    /**
     *  
     */
    GetIntrinsicModifierName( nEntityIndex : number ) : string
    /**
     * 
     */
    GetSharedCooldownName( nEntityIndex : number ) : string
    /**
     *  
     */
    AbilityReady( nEntityIndex : number ) : boolean
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
    GetAbilityDamage( nEntityIndex : number ) : string
    /**
     *  
     */
    GetAbilityDamageType( nEntityIndex : number ) : number
    /**
     * 
     */
    GetAbilityTargetFlags( nEntityIndex : number ) : number
    /**
     *  
     */
    GetAbilityTargetTeam( nEntityIndex : number ) : number
    /**
     *  
     */
    GetAbilityTargetType( nEntityIndex : number ) : number
    /**
     *  
     */
    GetAbilityType( nEntityIndex : number ) : number
    /**
     * 
     */
    GetBehavior( nEntityIndex : number ) : number
    /**
     *  
     */
    GetCastRange( nEntityIndex : number ) : number
    /**
     *  
     */
    GetChannelledManaCostPerSecond( nEntityIndex : number ) : number
    /**
     * 
     */
    GetCurrentCharges( nEntityIndex : number ) : number
    /**
     * 
     */
    GetEffectiveLevel( nEntityIndex : number ) : number
    /**
     * 
     */
    GetHeroLevelRequiredToUpgrade( nEntityIndex : number ) : number
    /**
     *  
     */
    GetLevel( nEntityIndex : number ) : number
    /**
     * 
     */
    GetManaCost( nEntityIndex : number ) : number
    /**
     * 
     */
    GetMaxLevel( nEntityIndex : number ) : number
    /**
     *  
     */
    AttemptToUpgrade( nEntityIndex : number ) : void
    /**
     *  
     */
    CanLearn( nEntityIndex : number ) : boolean
    /**
     *  
     */
    GetAutoCastState( nEntityIndex : number ) : number
    /**
     *  
     */
    GetToggleState( nEntityIndex : number ) : number
    /**
     *  
     */
    HasScepterUpgradeTooltip( nEntityIndex : number ) : boolean
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
    GetAOERadius( nEntityIndex : number ) : number
    /**
     *  
     */
    GetBackswingTime( nEntityIndex : number ) : number
    /**
     *  
     */
    GetCastPoint( nEntityIndex : number ) : number
    /**
     * 
     */
    GetChannelStartTime( nEntityIndex : number ) : number
    /**
     *  
     */
    GetChannelTime( nEntityIndex : number ) : number
    /**
     * 
     */
    GetCooldown( nEntityIndex : number ) : number
    /**
     * 
     */
    GetCooldownLength( nEntityIndex : number ) : number
    /**
     * 
     */
    GetCooldownTime( nEntityIndex : number ) : number
    /**
     *  
     */
    GetCooldownTimeRemaining( nEntityIndex : number ) : number
    /**
     * 
     */
    GetDuration( nEntityIndex : number ) : number
    /**
     * 
     */
    GetUpgradeBlend( nEntityIndex : number ) : number
    /**
     * Get the local player's current active ability. (Pre-cast targetting state.)
     */
    GetLocalPlayerActiveAbility(): number
    /**
     *  
     */
    GetCaster( nAbilityIndex : number ) : number
    /**
     * 
     */
    GetCustomValueFor( nAbilityIndex : number , pszAbilityVarName : string ) : any
    /**
     *  
     */
    GetLevelSpecialValueFor( nAbilityIndex : number , szName : string ,  nLevel : number ) : number
    /**
     * 
     */
    GetSpecialValueFor( nAbilityIndex : number , szName : string ) : number
    /**
     * 
     */
    IsCosmetic( nAbilityIndex : number , nTargetEntityIndex : number )  : boolean
    /**
     * Attempt to execute the specified ability (Equivalent to clicking the ability in the HUD action bar)
     */
    ExecuteAbility( nAbilityEntIndex : number , nCasterEntIndex : number ,  bIsQuickCast : boolean ) : void
    /**
     * Attempt to double-tap (self-cast) the specified ability (Equivalent to double-clicking the ability in the HUD action bar)
     */
    CreateDoubleTapCastOrder( nAbilityEntIndex : number , nCasterEntIndex : number ) : void
    /**
     *  Ping the specified ability (Equivalent to alt-clicking the ability in the HUD action bar)
     */
    PingAbility( nAbilityIndex : number ) : void
    /**
     *  Returns the keybind (as a string) for the specified ability.
     */
    GetKeybind( nAbilityEntIndex : number ) : string

}

interface CScriptBindingPR_Items extends CScriptBindingPR_Abilities{
    /**
     *   
     */
    ShouldDisplayCharges( nEntityIndex : number ): number
    /**
     *   
     */
    AlwaysDisplayCharges( nEntityIndex : number ): number
    /**
     *   
     */
    ShowSecondaryCharges( nEntityIndex : number ): number
    /**
     *   
     */
    CanBeSoldByLocalPlayer( nEntityIndex : number ): boolean
    /**
     *   
     */
    CanDoubleTapCast( nEntityIndex : number ): boolean
    /**
     *   
     */
    ForceHideCharges( nEntityIndex : number ): number
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
    ProRatesChargesWhenSelling( nEntityIndex : number ): any
    /**
     *  
     */
    RequiresCharges( nEntityIndex : number ): number
    /**
     *  
     */
    CanBeExecuted( nEntityIndex : number ): boolean
    /**
     *  
     */
    GetCost( nEntityIndex : number ): number
    /**
     *  
     */
    GetCurrentCharges( nEntityIndex : number ): number
    /**
     *  
     */
    GetSecondaryCharges( nEntityIndex : number ): number
    /**
     *  
     */
    GetDisplayedCharges( nEntityIndex : number ): number
    /**
     *  
     */
    GetInitialCharges( nEntityIndex : number ): number
    /**
     *   
     */
    GetItemColor( nEntityIndex : number ): string
    /**
     *  
     */
    GetShareability( nEntityIndex : number ): string
    /**
     *  
     */
    GetAbilityTextureSF( nEntityIndex : number ): string
    /**
     *   
     */
    GetAssembledTime( nEntityIndex : number ): number
    /**
     *  
     */
    GetPurchaseTime( nEntityIndex : number ): number
    /**
     *  
     */
    GetPurchaser( nItemID : number ): number
    /**
     *  Attempt to have the local player disassemble the specified item. Returns false if the order wasn't issued.
     */
    LocalPlayerDisassembleItem( nItem : number ): void
    /**
     *  Attempt to have the local player drop the specified item from its stash. Returns false if the order wasn't issued.
     */
    LocalPlayerDropItemFromStash( nItem : number ): void
    /**
     *  Attempt to have the local player alert allies about the specified item. Returns false if the order wasn't issued.
     */
    LocalPlayerItemAlertAllies( nItem : number ): void
    /**
     *  Attempt to have the local player move the specified item to its stash. Returns false if the order wasn't issued.
     */
    LocalPlayerMoveItemToStash( nItem : number ): void
    /**
     *   Attempt to have the local player sell the specified item. Returns false if the order wasn't issued.
     */
    LocalPlayerSellItem( nItem : number ): void

}

/**
 * {
 *   "team_id": 2,
 *   "team_name": "#DOTA_GoodGuys",
 *   "team_max_players": 1,
 *   "team_score": 0,
 *   "team_num_players": 1
 * }	
 */
declare interface ITeamDetails {
    "team_id": number;
    "team_name": string;
    "team_max_players": number;
    "team_score": number;
    "team_num_players": number;
}	

declare interface IPlayerInfo {
    "player_id": number;
    "player_name": string;
    "player_connection_state": number;
    "player_steamid": string;
    "player_kills": number;
    "player_deaths": number;
    "player_assists": number;
    "player_selected_hero_id": number;
    "player_selected_hero": string;
    "player_selected_hero_entity_index": number;
    "possible_hero_selection": "";
    "player_level": number;
    "player_respawn_seconds": number;
    "player_gold": number;
    "player_team_id": number;
    "player_is_local": boolean;
    "player_has_host_privileges": boolean;
}	


declare interface IMapInfo {
    "map_name": string;
    "map_display_name": string;
}	

interface CScriptBindingPR_Game{
    IsInToolsMode(): boolean;
    /**
     * 
     */
    Time(): number
    /**
     *  
     */
    GetGameTime(): number
    /**
     * 
     */
    GetDOTATime( bIncludePreGame : boolean , bIncludeNegativeTime : boolean ) : number
    /**
     *  Return the team id of the winning team.
     */
    GetGameWinner(): number
    /**
     * 
     */
    GetStateTransitionTime(): number
    /**
     *  Get the difficulty setting of the 
     */
    GetCustomGameDifficulty(): number
    /**
     * Returns true if the user has enabled flipped HUD
     */
    IsHUDFlipped() : boolean
    /**
     * Returns the width of the display.
     */
    GetScreenWidth(): number
    /**
     *  Returns the height of the display.
     */
    GetScreenHeight(): number
    /**
     *  Converts the specified x,y,z world co-ordinate into an x screen coordinate. Returns -1 if behind the camera
     */
    WorldToScreenX( x : number , y : number ,  z : number ) : number
    /**
     *  Converts the specified x,y,z world co-ordinate into a y screen coordinate. Returns -1 if behind the camera
     */
    WorldToScreenY( x : number , y : number ,  z : number ) : number
    /**
     *  Converts the specified x, y screen coordinates into a x, y, z world coordinates.
     */
    ScreenXYToWorld( nX : number , nY : number ) : number
    /**
     *  Returns the keybind (as a string) for the requested ability slot.
     */
    GetKeybindForAbility( iSlot : number ) : string
    /**
     * 
     */
    GetNianFightTimeLeft(): number
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
    AddCommand( pszCommandName : string , callback : js_value ,  pszDescription : string , nFlags : number ) : void
    /**
     * 
     */
    GetLocalPlayerID(): number
    /**
     *  Assign the local player to the specified team
     */
    PlayerJoinTeam( nTeamID : number ) : void
    /**
     * Assign the currently unassigned players to teams
     */
    AutoAssignPlayersToTeams(): void
    /**
     * Shuffle the team assignments of all of the players currently assigned to a team.
     */
    ShufflePlayerTeamAssignments(): void
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
    GetAutoLaunchEnabled(): any
    /**
     * Lock the team selection preventing players from swiching teams.
     */
    SetTeamSelectionLocked( bLockTeams : boolean )  : void
    /**
     * Returns true or false to indicate if team selection is locked
     */
    GetTeamSelectionLocked(): boolean
    /**
     *  Get all team IDs
     */
    GetAllTeamIDs(): number[]
    /**
     *  Get all player IDs
     */
    GetAllPlayerIDs(): number[]
    /**
     * Get unassigned player IDs
     */
    GetUnassignedPlayerIDs(): number[]
    /**
     *  Get info about the player hero ultimate ability
     */
    GetPlayerUltimateStateOrTime( nPlayerID : number ) : any
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
    GetTeamDetails( nTeam : number ) : ITeamDetails
    /**
     * Get details for the local player
     */
    GetLocalPlayerInfo(): IPlayerInfo
    /**
     *  Get info about the player items.
     */
    GetPlayerItems( nPlayerID : number ) : number[]
    /**
     * Get info about the given player
     */
    GetPlayerInfo( nPlayerID : number ) : any
    /**
     *  Get player IDs for the given team
     */
    GetPlayerIDsOnTeam( nTeam : number ) : number[]
    /**
     *  
     */
    ServerCmd( pMsg : string ) : void
    /**
     * 
     */
    FinishGame(): void
    /**
     * Emit a sound for the local player. Returns an number handle that can be passed to StopSound. (Returns 0 on failure.)
     */
    EmitSound( pSoundEventName : string ) : void
    /**
     * Stop a current playing sound on the local player. Takes handle from a call to EmitSound.
     */
    StopSound( nHandle : number ) : void
    /**
     * Return information about the current map.
     */
    GetMapInfo(): IMapInfo
    /**
     *  Orders from the local player - takes a single arguments object that supports: dotaunitorder_t OrderType, ent_index TargetIndex, vector Position, ent_index AbilityIndex, OrderIssuer_t OrderIssuer, ent_index UnitIndex, OrderQueueBehavior_t QueueBehavior, bool ShowEffects.
     */
    PrepareUnitOrders( args : js_raw_args ) : void
    /**
     * Order a unit to drop the specified item at the current cursor location.
     */
    DropItemAtCursor( nControlledUnitEnt : number , nItemEnt : number ) : void
    /**
     *  
     */
    EnterAbilityLearnMode(): void
    /**
     *  
     */
    EndAbilityLearnMode(): void
    /**
     * 
     */
    IsInAbilityLearnMode() : boolean

}

interface ${

    (idSelector: string) : Panel

    /**
    Log a message
    */
    Msg(...args: any[]) : void
    /**
    Dispatch an event
    */
    DispatchEvent( eventName : string, ...eventArgs: any[] ) : void
    /**
    Dispatch an event to occur later
    */
    DispatchEventAsync( delay:number, eventName: string, ...eventArgs: any[]) : void
    /**
    Register an event handler
    */
    RegisterEventHandler( eventName: string, context: Panel, callback: Function ) : void
    /**
    Register a handler for an event that is not otherwise handled
    */
    RegisterForUnhandledEvent( eventName: string, callback: Function ): void
    /**
    Remove an unhandled event handler
    */
    UnregisterForUnhandledEvent( eventNameUnconfirmYet: string ): void
    /**
    Find an element
    */
    FindChildInContext( idSelector: string ) : Panel
    /**
    Make a web request
    */
    AsyncWebRequest( url: string, args:Object ): void
    /**
    Create a new panel
    */
    CreatePanel( panelType:string, parent:Panel, id:string ) : Panel
    CreatePanel( panelType:"Panel", parent:Panel, id:string ) : Panel
    CreatePanel( panelType:"Image", parent:Panel, id:string ) : Image
    CreatePanel( panelType:"Label", parent:Panel, id:string ) : Label
    CreatePanel( panelType:"Button", parent:Panel, id:string ) : Button
    CreatePanel( panelType:"DOTAHeroImage", parent:Panel, id:string ) : DOTAHeroImage
    CreatePanel( panelType:"DOTAAbilityImage", parent:Panel, id:string ) : DOTAAbilityImage
    CreatePanel( panelType:"DOTAAvatarImage", parent:Panel, id:string ) : DOTAAvatarImage
    CreatePanel( panelType:"DOTAUserName", parent:Panel, id:string ) : DOTAUserName
    CreatePanel( panelType:"DOTAScenePanel", parent:Panel, id:string ) : DOTAScenePanel
    /**
    Localize a string
    */
    Localize( text: string, panel?: Panel ) : string
    /**
    Get the current language
    */
    Language() : string
    /**
    Schedule a function to be called later
    */
    Schedule( delay:number, callback:Function ) : number
    /**
    Cancelse a scheduled function
    */
    CancelScheduled( previousSchedule: number ): void
    /**
    Get the current panel context
    */
    GetContextPanel() : Panel
    /**
    Register a key binding
    */
    RegisterKeyBind( context:Panel, keyName:string, callback:Function ): void
    /**
    Call a function on each given item
    */
    Each( table:Object, callback:Function ): void

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
    contextEntityIndex: number
    AddClass( className : string ) : void
    RemoveClass( className :  string ) : void
    BHasClass( className :  string ) : boolean
    SetHasClass( className : string , onoff : boolean ) : void
    ToggleClass( className : string ): void
    ClearPanelEvent( eventName : string ): void
    SetDraggable( draggable : boolean ) : void
    IsDraggable() : boolean
    GetChildCount() : number
    GetChild( childIndex : number ) : Panel
    GetChildIndex( unknown_variant_type_1 : unknown_variant_type ): number
    Children() : Array<Panel>
    FindChildrenWithClassTraverse( className : string ) : Array<Panel>
    GetParent() : Panel
    SetParent( parent : Panel ) : void
    FindChild( id : string ) : Panel
    FindChildTraverse( id : string ) : Panel
    FindChildInLayoutFile( id : string ) : Panel
    RemoveAndDeleteChildren() : void
    MoveChildBefore( panel1 : Panel , panel2 : Panel ): void
    MoveChildAfter( panel1 : Panel , panel2 : Panel ): void
    GetPositionWithinWindow(): void
    ApplyStyles( boolean_1 : boolean ): void
    ClearPropertyFromCode( unknown_variant_type_1 : unknown_variant_type ): void
    DeleteAsync( delay : number ): void
    BIsTransparent() : boolean
    BAcceptsInput() : boolean
    BAcceptsFocus() : boolean
    SetFocus() : void
    UpdateFocusInContext(): void
    BHasHoverStyle() : boolean
    SetAcceptsFocus( boolean_1 : boolean ) : void
    SetDisableFocusOnMouseDown( boolean_1 : boolean ) : void
    BHasKeyFocus() : boolean
    SetScrollParentToFitWhenFocused( boolean_1 : boolean ) : void
    BScrollParentToFitWhenFocused() : boolean
    IsSelected() : boolean
    BHasDescendantKeyFocus(): boolean
    BLoadLayout( layoutFilePath : string , boolean_2 : boolean ,  boolean_3 : boolean ) : boolean
    BLoadLayoutSnippet(SnippetName: string) : boolean
    BLoadLayoutFromString( js_raw_args_1 : js_raw_args ) : boolean
    LoadLayoutFromStringAsync( string_1 : string , boolean_2 : boolean ,  boolean_3 : boolean ): void
    LoadLayoutAsync( string_1 : string , boolean_2 : boolean ,  boolean_3 : boolean ): void
    BCreateChildren( string_1 : string ) : boolean
    SetTopOfInputContext( boolean_1 : boolean ) : void
    SetDialogVariable( string_1 : string , string_2 : string ) : void
    SetDialogVariableInt( string_1 : string , number_2 : number ) : void
    ScrollToTop(): void
    ScrollToBottom(): void
    ScrollToLeftEdge(): void
    ScrollToRightEdge(): void
    ScrollParentToMakePanelFit( unknown_variant_type_1 : unknown_variant_type , boolean_2 : boolean ): void
    BCanSeeInParentScroll() : boolean
    GetAttributeInt( string_1 : string , number_2 : number ): number
    GetAttributeString( string_1 : string , string_2 : string ): string
    GetAttributeUInt32( string_1 : string , number_2 : number ): number
    SetAttributeInt( string_1 : string , number_2 : number ) : void
    SetAttributeString( string_1 : string , string_2 : string ) : void
    SetAttributeUInt32( string_1 : string , number_2 : number ) : void
    SetInputNamespace( string_1 : string ) : void
    RegisterForReadyEvents( boolean_1 : boolean ): void
    BReadyForDisplay() : boolean
    SetReadyForDisplay( boolean_1 : boolean ) : void
    SetPositionInPixels( x: number,  y: number,  z: number ): void
    rememberchildfocus : boolean
    paneltype : string
    text : string
    html : boolean
    SetImage(p: string): void
    abilityname: string

    SetPanelEvent( eventName: string, callback:Function ) : void
    SetPanelEvent( eventName: "onload", callback: Function): void;
    SetPanelEvent( eventName: "onactivate", callback: Function): void;
    SetPanelEvent( eventName: "onmouseactivate", callback: Function): void;
    SetPanelEvent( eventName: "oncontextmenu", callback: Function): void;
    SetPanelEvent( eventName: "onfocus", callback: Function): void;
    SetPanelEvent( eventName: "ondescendantfocus", callback: Function): void;
    SetPanelEvent( eventName: "onblur", callback: Function): void;
    SetPanelEvent( eventName: "ondescendantblur", callback: Function): void;
    SetPanelEvent( eventName: "oncancel", callback: Function): void;
    SetPanelEvent( eventName: "onmouseover", callback: Function): void;
    SetPanelEvent( eventName: "onmouseout", callback: Function): void;
    SetPanelEvent( eventName: "ondblclick", callback: Function): void;
    SetPanelEvent( eventName: "onmoveup", callback: Function): void;
    SetPanelEvent( eventName: "onmovedown", callback: Function): void;
    SetPanelEvent( eventName: "onmoveleft", callback: Function): void;
    SetPanelEvent( eventName: "onmoveright", callback: Function): void;
    SetPanelEvent( eventName: "ontabforward", callback: Function): void;
    SetPanelEvent( eventName: "ontabbackward", callback: Function): void;
    SetPanelEvent( eventName: "onselect", callback: Function): void;
    SetPanelEvent( eventName: "ondeselect", callback: Function): void;
    SetPanelEvent( eventName: "onscrolledtobottom", callback: Function): void;
    SetPanelEvent( eventName: "onscrolledtorightedge", callback: Function): void;
}

interface DOTAScenePanel extends Panel {
    FireEntityInput(name: string, event: string, args?: string): void;
    SetUnit(unitName: string, a: string): void;
}

interface Button extends Panel{
}

interface Image extends Panel{
    SetImage(url: string) : any
}

interface Label extends Panel{
}

interface DOTAAvatarImage extends Panel{
    steamid : string
    accountid : string
}

interface DOTAUserName extends Panel{
    steamid : string
    accountid : string
}

interface DOTAHeroImage extends Panel{
    heroid : number
    heroname : string
    heroimagestyle : string
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

declare enum DOTA_GameState {
    DOTA_GAMERULES_STATE_INIT,
    DOTA_GAMERULES_STATE_WAIT_FOR_PLAYERS_TO_LOAD,
    DOTA_GAMERULES_STATE_HERO_SELECTION,
    DOTA_GAMERULES_STATE_STRATEGY_TIME,
    DOTA_GAMERULES_STATE_PRE_GAME,
    DOTA_GAMERULES_STATE_GAME_IN_PROGRESS,
    DOTA_GAMERULES_STATE_POST_GAME,
    DOTA_GAMERULES_STATE_DISCONNECT,
    DOTA_GAMERULES_STATE_TEAM_SHOWCASE,
    DOTA_GAMERULES_STATE_CUSTOM_GAME_SETUP,
    DOTA_GAMERULES_STATE_LAST,
}
declare enum DOTA_GC_TEAM{
    DOTA_GC_TEAM_GOOD_GUYS,
    DOTA_GC_TEAM_BAD_GUYS,
    DOTA_GC_TEAM_BROADCASTER,
    DOTA_GC_TEAM_SPECTATOR,
    DOTA_GC_TEAM_PLAYER_POOL,
    DOTA_GC_TEAM_NOTEAM,
}
declare enum DOTAConnectionState_t{
    DOTA_CONNECTION_STATE_UNKNOWN,
    DOTA_CONNECTION_STATE_NOT_YET_CONNECTED,
    DOTA_CONNECTION_STATE_CONNECTED,
    DOTA_CONNECTION_STATE_DISCONNECTED,
    DOTA_CONNECTION_STATE_ABANDONED,
    DOTA_CONNECTION_STATE_LOADING,
    DOTA_CONNECTION_STATE_FAILED,
}
declare enum dotaunitorder_t{
    DOTA_UNIT_ORDER_NONE,
    DOTA_UNIT_ORDER_MOVE_TO_POSITION,
    DOTA_UNIT_ORDER_MOVE_TO_TARGET,
    DOTA_UNIT_ORDER_ATTACK_MOVE,
    DOTA_UNIT_ORDER_ATTACK_TARGET,
    DOTA_UNIT_ORDER_CAST_POSITION,
    DOTA_UNIT_ORDER_CAST_TARGET,
    DOTA_UNIT_ORDER_CAST_TARGET_TREE,
    DOTA_UNIT_ORDER_CAST_NO_TARGET,
    DOTA_UNIT_ORDER_CAST_TOGGLE,
    DOTA_UNIT_ORDER_HOLD_POSITION,
    DOTA_UNIT_ORDER_TRAIN_ABILITY,
    DOTA_UNIT_ORDER_DROP_ITEM,
    DOTA_UNIT_ORDER_GIVE_ITEM,
    DOTA_UNIT_ORDER_PICKUP_ITEM,
    DOTA_UNIT_ORDER_PICKUP_RUNE,
    DOTA_UNIT_ORDER_PURCHASE_ITEM,
    DOTA_UNIT_ORDER_SELL_ITEM,
    DOTA_UNIT_ORDER_DISASSEMBLE_ITEM,
    DOTA_UNIT_ORDER_MOVE_ITEM,
    DOTA_UNIT_ORDER_CAST_TOGGLE_AUTO,
    DOTA_UNIT_ORDER_STOP,
    DOTA_UNIT_ORDER_TAUNT,
    DOTA_UNIT_ORDER_BUYBACK,
    DOTA_UNIT_ORDER_GLYPH,
    DOTA_UNIT_ORDER_EJECT_ITEM_FROM_STASH,
    DOTA_UNIT_ORDER_CAST_RUNE,
    DOTA_UNIT_ORDER_PING_ABILITY,
    DOTA_UNIT_ORDER_MOVE_TO_DIRECTION,
    DOTA_UNIT_ORDER_PATROL,
    DOTA_UNIT_ORDER_VECTOR_TARGET_POSITION,
    DOTA_UNIT_ORDER_RADAR,
}
declare enum DOTA_OVERHEAD_ALERT{
    OVERHEAD_ALERT_GOLD,
    OVERHEAD_ALERT_DENY,
    OVERHEAD_ALERT_CRITICAL,
    OVERHEAD_ALERT_XP,
    OVERHEAD_ALERT_BONUS_SPELL_DAMAGE,
    OVERHEAD_ALERT_MISS,
    OVERHEAD_ALERT_DAMAGE,
    OVERHEAD_ALERT_EVADE,
    OVERHEAD_ALERT_BLOCK,
    OVERHEAD_ALERT_BONUS_POISON_DAMAGE,
    OVERHEAD_ALERT_HEAL,
    OVERHEAD_ALERT_MANA_ADD,
    OVERHEAD_ALERT_MANA_LOSS,
    OVERHEAD_ALERT_LAST_HIT_EARLY,
    OVERHEAD_ALERT_LAST_HIT_CLOSE,
    OVERHEAD_ALERT_LAST_HIT_MISS,
    OVERHEAD_ALERT_MAGICAL_BLOCK,
}
declare enum DOTA_HeroPickState{
    DOTA_HEROPICK_STATE_NONE,
    DOTA_HEROPICK_STATE_AP_SELECT,
    DOTA_HEROPICK_STATE_SD_SELECT,
    DOTA_HEROPICK_STATE_INTRO_SELECT,
    DOTA_HEROPICK_STATE_RD_SELECT,
    DOTA_HEROPICK_STATE_CM_INTRO,
    DOTA_HEROPICK_STATE_CM_CAPTAINPICK,
    DOTA_HEROPICK_STATE_CM_BAN1,
    DOTA_HEROPICK_STATE_CM_BAN2,
    DOTA_HEROPICK_STATE_CM_BAN3,
    DOTA_HEROPICK_STATE_CM_BAN4,
    DOTA_HEROPICK_STATE_CM_BAN5,
    DOTA_HEROPICK_STATE_CM_BAN6,
    DOTA_HEROPICK_STATE_CM_BAN7,
    DOTA_HEROPICK_STATE_CM_BAN8,
    DOTA_HEROPICK_STATE_CM_BAN9,
    DOTA_HEROPICK_STATE_CM_BAN10,
    DOTA_HEROPICK_STATE_CM_SELECT1,
    DOTA_HEROPICK_STATE_CM_SELECT2,
    DOTA_HEROPICK_STATE_CM_SELECT3,
    DOTA_HEROPICK_STATE_CM_SELECT4,
    DOTA_HEROPICK_STATE_CM_SELECT5,
    DOTA_HEROPICK_STATE_CM_SELECT6,
    DOTA_HEROPICK_STATE_CM_SELECT7,
    DOTA_HEROPICK_STATE_CM_SELECT8,
    DOTA_HEROPICK_STATE_CM_SELECT9,
    DOTA_HEROPICK_STATE_CM_SELECT10,
    DOTA_HEROPICK_STATE_CM_PICK,
    DOTA_HEROPICK_STATE_AR_SELECT,
    DOTA_HEROPICK_STATE_MO_SELECT,
    DOTA_HEROPICK_STATE_FH_SELECT,
    DOTA_HEROPICK_STATE_CD_INTRO,
    DOTA_HEROPICK_STATE_CD_CAPTAINPICK,
    DOTA_HEROPICK_STATE_CD_BAN1,
    DOTA_HEROPICK_STATE_CD_BAN2,
    DOTA_HEROPICK_STATE_CD_BAN3,
    DOTA_HEROPICK_STATE_CD_BAN4,
    DOTA_HEROPICK_STATE_CD_BAN5,
    DOTA_HEROPICK_STATE_CD_BAN6,
    DOTA_HEROPICK_STATE_CD_SELECT1,
    DOTA_HEROPICK_STATE_CD_SELECT2,
    DOTA_HEROPICK_STATE_CD_SELECT3,
    DOTA_HEROPICK_STATE_CD_SELECT4,
    DOTA_HEROPICK_STATE_CD_SELECT5,
    DOTA_HEROPICK_STATE_CD_SELECT6,
    DOTA_HEROPICK_STATE_CD_SELECT7,
    DOTA_HEROPICK_STATE_CD_SELECT8,
    DOTA_HEROPICK_STATE_CD_SELECT9,
    DOTA_HEROPICK_STATE_CD_SELECT10,
    DOTA_HEROPICK_STATE_CD_PICK,
    DOTA_HEROPICK_STATE_BD_SELECT,
    DOTA_HERO_PICK_STATE_ABILITY_DRAFT_SELECT,
    DOTA_HERO_PICK_STATE_ARDM_SELECT,
    DOTA_HEROPICK_STATE_ALL_DRAFT_SELECT,
    DOTA_HERO_PICK_STATE_CUSTOMGAME_SELECT,
    DOTA_HEROPICK_STATE_COUNT,
}
declare enum DOTATeam_t{
    DOTA_TEAM_FIRST,
    DOTA_TEAM_GOODGUYS,
    DOTA_TEAM_BADGUYS,
    DOTA_TEAM_NEUTRALS,
    DOTA_TEAM_NOTEAM,
    DOTA_TEAM_CUSTOM_1,
    DOTA_TEAM_CUSTOM_2,
    DOTA_TEAM_CUSTOM_3,
    DOTA_TEAM_CUSTOM_4,
    DOTA_TEAM_CUSTOM_5,
    DOTA_TEAM_CUSTOM_6,
    DOTA_TEAM_CUSTOM_7,
    DOTA_TEAM_CUSTOM_8,
    DOTA_TEAM_COUNT,
    DOTA_TEAM_CUSTOM_MIN,
    DOTA_TEAM_CUSTOM_MAX,
    DOTA_TEAM_CUSTOM_COUNT,
}
declare enum DOTA_RUNES{
    DOTA_RUNE_INVALID,
    DOTA_RUNE_DOUBLEDAMAGE,
    DOTA_RUNE_HASTE,
    DOTA_RUNE_ILLUSION,
    DOTA_RUNE_INVISIBILITY,
    DOTA_RUNE_REGENERATION,
    DOTA_RUNE_BOUNTY,
    DOTA_RUNE_ARCANE,
    DOTA_RUNE_COUNT,
}
declare enum DOTA_UNIT_TARGET_TEAM{
    DOTA_UNIT_TARGET_TEAM_NONE,
    DOTA_UNIT_TARGET_TEAM_FRIENDLY,
    DOTA_UNIT_TARGET_TEAM_ENEMY,
    DOTA_UNIT_TARGET_TEAM_CUSTOM,
    DOTA_UNIT_TARGET_TEAM_BOTH,
}
declare enum DOTA_UNIT_TARGET_TYPE{

}
declare enum DOTA_UNIT_TARGET_FLAGS{

}
declare enum DOTALimits_t{

}
declare enum DOTAInventoryFlags_t{

}
declare enum EDOTA_ModifyGold_Reason{

}
declare enum DOTAUnitAttackCapability_t{

}
declare enum DOTAUnitMoveCapability_t{

}
declare enum EShareAbility{
    
}
declare enum DOTAMusicStatus_t{
    
}
declare enum DOTA_ABILITY_BEHAVIOR{
    
}
declare enum DAMAGE_TYPES{
    
}
declare enum ABILITY_TYPES{
    
}
declare enum SPELL_IMMUNITY_TYPES{
    
}
declare enum DOTADamageFlag_t{
    
}
declare enum EDOTA_ModifyXP_Reason{
    
}
declare enum GameActivity_t{
    
}
declare enum DOTAMinimapEvent_t{
    
}
declare enum DOTASlotType_t{
    
}
declare enum modifierfunction{
    
}
declare enum modifierstate{
    
}
declare enum DOTAModifierAttribute_t{
    
}
declare enum Attributes{
    
}
declare enum ParticleAttachment_t{
    PATTACH_INVALID,
    PATTACH_ABSORIGIN,
    PATTACH_ABSORIGIN_FOLLOW,
    PATTACH_CUSTOMORIGIN,
    PATTACH_CUSTOMORIGIN_FOLLOW,
    PATTACH_POINT,
    PATTACH_POINT_FOLLOW,
    PATTACH_EYES_FOLLOW,
    PATTACH_OVERHEAD_FOLLOW,
    PATTACH_WORLDORIGIN,
    PATTACH_ROOTBONE_FOLLOW,
    PATTACH_RENDERORIGIN_FOLLOW,
    PATTACH_MAIN_VIEW,
    PATTACH_WATERWAKE,
    PATTACH_CENTER_FOLLOW,
    MAX_PATTACH_TYPES,
}
declare enum DOTA_MOTION_CONTROLLER_PRIORITY{
    
}
declare enum DOTASpeechType_t{
    
}
declare enum DOTAAbilitySpeakTrigger_t{
    
}
declare enum DotaCustomUIType_t{
    
}
declare enum DotaDefaultUIElement_t{
    
}
declare enum PlayerUltimateStateOrTime_t{
    
}
declare enum PlayerOrderIssuer_t{
    
}
declare enum OrderQueueBehavior_t{
    
}
declare enum CLICK_BEHAVIORS{
    
}
declare enum AbilityLearnResult_t{
    
}
