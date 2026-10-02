import Dexie, { type Table } from "dexie";

export interface Base { id: string; createdAt: number; updatedAt: number }
export interface Setting { key: string; value: unknown }

// Record shapes are refined in the stages that use them (see roadmap).
export class ThinkSpaceDB extends Dexie {
  maps!: Table<Base & Record<string, unknown>, string>;
  nodes!: Table<Base & { mapId: string }, string>;
  edges!: Table<Base & { mapId: string }, string>;
  boards!: Table<Base & Record<string, unknown>, string>;
  uploads!: Table<Base & { mapId?: string }, string>;
  notes!: Table<Base & { mapId?: string }, string>;
  decks!: Table<Base & Record<string, unknown>, string>;
  cards!: Table<Base & { deckId: string; due?: number }, string>;
  settings!: Table<Setting, string>;

  constructor() {
    super("think-space");
    this.version(1).stores({
      maps: "id, updatedAt",
      nodes: "id, mapId",
      edges: "id, mapId",
      boards: "id, updatedAt",
      uploads: "id, mapId",
      notes: "id, mapId",
      decks: "id, updatedAt",
      cards: "id, deckId, due",
      settings: "key",
    });
  }
}

export const db = new ThinkSpaceDB();
export const SCHEMA_VERSION = 1;
