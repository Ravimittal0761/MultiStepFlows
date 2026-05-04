#  MultiStepFlows App

A simple and clean multi-step form app built using React Native (Expo).  
This app saves user progress and restores it when the app is reopened.


##  Features

-  Multi-step form (Step1 → Step2 → Step3 → Summary)
-  Conditional step (Extra step for Fitness users)
-  Auto-save using AsyncStorage
-  Resume from last step after app reopen
-  Clean and minimal UI
-  Expo Router navigation


##  Flow of the App

1.  **Step 1 (Age Input)**
   - User enters age
   - Data gets saved

2. **Step 2 (Select Goal)**
   - User selects:
     - Fitness → goes to Extra Step
     - Study → skips Extra Step

3. **Extra Step (Only for Fitness)**
   - User enters workout preference

4. **Step 3 (Preferences)**
   - User selects multiple preferences

5. **Summary Screen**
   - Displays all entered data

---

## Data Handling

- Data is stored using **AsyncStorage**
- Current step is also saved
- On app restart:
  - User lands on the same step (resume feature)

---

##  Tech Stack

- React Native (Expo)
- TypeScript
- Expo Router
- AsyncStorage

---

##  Run the Project

**bash**
npm install
npx expo start