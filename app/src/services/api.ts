// src/services/api.ts

import { saveLocal, loadLocal } from '../utils/storage';

export const saveProgress = async (data: any) => {
  try {
    console.log("Saving data:", data);
    await saveLocal(data);
    console.log("Saved successfully");
    return { success: true };
  } catch (e) {
    console.log("Save Error:", e); 
    throw new Error("Failed to save");
  }
};

export const getProgress = async () => {
  try {
    const data = await loadLocal(); 
    return data;
  } catch (e) {
    throw new Error("Failed to load");
  }
};