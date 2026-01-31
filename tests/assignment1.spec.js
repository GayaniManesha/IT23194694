// tests/assignment1.spec.js
const { test, expect } = require('@playwright/test');

/**
 * ------------------------------------------------------------------
 * STEP 1: DEFINE YOUR TEST DATA
 * ------------------------------------------------------------------
 */
const testCases = [
  // --- POSITIVE SCENARIOS ---
  {
    id: 'Pos_Fun_0001',
    description: 'Greetings: new year wishes',
    input: 'oyaata suBhama suBha aluth avrudhdhak veevaa!',
    expected: 'ඔයාට සුභම සුභ අලුත් අව්‍රුද්දක් වේවා!', 
    type: 'S'
  },
  {
    id: 'Pos_Fun_0002',
    description: 'Simple Sentence: Going home',
    input: 'amme mama gedhara enavaa. mata hodhatama badagini.',
    expected: 'අම්මෙ මම ගෙදර එනවා. මට හොදටම බඩගිනි.', 
    type: 'S'
  },
{
    id: 'Pos_Fun_0003',
    description: 'Negative: exam not taking',
    input: 'mama mee vathaavee exam karannee naee',
    expected: 'මම මේ වතාවේ exam කරන්නේ නෑ', 
    type: 'S'
  },

  {
    id: 'Pos_Fun_0004',
    description: 'Negative: Raining',
    input: 'mata gedhara yanna oni. haebaeyi vahina nisaa yanna baee ',
    expected: 'මට ගෙදර යන්න ඔනි. හැබැයි වහින නිසා යන්න බෑ ', 
    type: 'S'
  },
  {
    id: 'Pos_Fun_0005',
    description: 'Simple Sentence: Staying place',
    input: 'Anee mata ubala inna  thaena kiyapan. mama vinaadi dhahayen enavaa. ',
    expected: 'අනේ මට උබල ඉන්න  තැන කියපන්. මම විනාඩි දහයෙන් එනවා.  ', 
    type: 'S'
  },
  {
    id: 'Pos_Fun_0006',
    description: 'Simple Sentence: KOttu , plain tea',
    input: 'mata koththuvakuyi plain tea ekakuyi oni.  ',
    expected: 'මට කොත්තුවකුයි plain tea එකකුයි ඔනි.  ', 
    type: 'S'
  },
  {
    id: 'Pos_Fun_0007',
    description: 'Mixed Sentence: Agreement',
    input: 'mee agreement athsan karanna kalin terms & conditions hodata kiyavanna.  ',
    expected: 'මේ agreement අත්සන් කරන්න කලින් terms & conditions හොඩට කියවන්න. ', 
    type: 'S'
  },

{
    id: 'Pos_Fun_0008',
    description: 'Slang and colloquial phrasing: Grand mother in road',
    input: 'ubayi maayii aruyii car eka aethule idhdhi sudhu paata saariyak aedhagaththa aachchi kenek aavanee. Mama hodhatama baya unaa ban edhaa raee. ',
    expected: 'උබයි මායී අරුයී car එක ඇතුලෙ ඉද්දි සුදු පාට සාරියක් ඇදගත්ත ආච්චි කෙනෙක් ආවනේ. මම හොදටම බය උනා බන් එදා රෑ.', 
    type: 'M'
  },
{
    id: 'Pos_Fun_0009',
    description: 'Greetings:  wishes',
    input: 'suBha udhaeesanak oyalaa haemotama. kohomadha oyaalage weekend eka ?. mama hithanavaa oyalaa vinodhen inna aethi kiyala. api haemoma adha dhavasa effective vidhihata vageema sathuten gatha karamu. sthuuthi.  ',
    expected: 'සුභ උදෑසනක් ඔයලා හැමොටම. කොහොමද ඔයාලගෙ weekend එක ?. මම හිතනවා ඔයලා විනොදෙන් ඉන්න ඇති කියල. අපි හැමොම අද දවස effective විදිහට වගේම සතුටෙන් ගත කරමු. ස්තූති.', 
    type: 'M'
  },
{
    id: 'Pos_Fun_0010',
    description: 'Dates: CV submission request',
    input: 'machan , please send your CV by 01/02/2025 and before 4 .00 pm. ',
    expected: 'මචන් , please send your CV by 01/02/2025 and before 4 .00 pm.', 
    type: 'S'
  },
{
    id: 'Pos_Fun_0011',
    description: 'Brands terms : CV submission request',
    input: 'Api hodhata Linkedin eka maintain karanna onii.',
    expected: 'අපි හොදට Linkedin එක maintain කරන්න ඔනී.', 
    type: 'S'
  },
  {
    id: 'Pos_Fun_0012',
    description: 'Repeated words: Chuttak ',
    input: 'chuttak chuttak balanna maa dhihaa...',
    expected: 'චුට්ටක් චුට්ටක් බලන්න මා දිහා...', 
    type: 'S'
  },

   {
    id: 'Pos_Fun_0013',
    description: 'Interrogative : film',
    input: 'oyaalaa yanavadha heta raee chithrapatiya balanna ?',
    expected: 'ඔයාලා යනවද හෙට රෑ චිත්‍රපටිය බලන්න ?', 
    type: 'S'
  },
  {
    id: 'Pos_Fun_0014',
    description: 'Missing space: Painting hobby ',
    input: 'magee hobby eka thamayi chithra adhina eka. mama eekata harima aasayii. mama stress unaama karanne chithra adhina eka. eevagemaa mama aasai chithra collection ekakhadhaaganna.',
    expected: 'මගේ hobby එක තමයි චිත්‍ර අදින එක. මම ඒකට හරිම ආසයී. මම stress උනාම කරන්නේ චිත්‍ර අදින එක. ඒවගෙමා මම ආසෛ චිත්‍ර collection එකක්හදාගන්න.', 
    type: 'M'
  },

{
    id: 'Pos_Fun_0015',
    description: 'Price: phone ',
    input: 'magee yaaluva gaththa phone ekee price eka RS. 200000 ',
    expected: 'මගේ යාලුව ගත්ත phone එකේ price එක RS. 200000 ', 
    type: 'S'
  },

  {
    id: 'Pos_Fun_0016',
    description: 'Interrogative: bill request ',
    input: 'karuNaakaralaa mata bill eka dhenna puluvandha ?',
    expected: 'කරුණාකරලා මට bill එක දෙන්න පුලුවන්ද ? ', 
    type: 'S'
  },

  {
    id: 'Pos_Fun_0017',
    description: ' Slang and colloquial phrasing : crazy ',
    input: 'adoo api maara aathal ekak gaththee ban . pissu haedhenavaa',
    expected: 'අඩෝ අපි මාර ආතල් එකක් ගත්තේ බන් . පිස්සු හැදෙනවා', 
    type: 'S'
  },

  {
    id: 'Pos_Fun_0018',
    description: ' Short terms: ID and NIC ',
    input: 'mata oyaage ID ekayi, NIC ekayi evanna',
    expected: 'මට ඔයාගෙ ID එකයි, NIC එකයි එවන්න', 
    type: 'S'
  },

  {
    id: 'Pos_Fun_0019',
    description: ' short forms: ATM card ',
    input: 'mee ATM card eka oyaagedha? meeka vaetila thibunaa ',
    expected: 'මේ ATM card එක ඔයාගෙද? මේක වැටිල තිබුනා ', 
    type: 'S'
  },

  {
    id: 'Pos_Fun_0020',
    description: ' past tense: going to Colombo ',
    input: 'mama giya maasee koLaBA giyaa',
    expected: 'මම ගිය මාසේ කොළඹ ගියා', 
    type: 'S'
  },

  {
    id: 'Pos_Fun_0021',
    description: ' Mixed tense :samaposha packet ',
    input: 'mama gedhara yadhdhi gee gaava kaden samaposha packet ekak aragena giyaa',
    expected: 'මම ගෙදර යද්දි ගේ ගාව කඩෙන් සමපොශ packet එකක් අරගෙන ගියා', 
    type: 'M'
  },

{
    id: 'Pos_Fun_0022',
    description: ' past tense: mixed sentence ',
    input: 'mama gedhara yadhdhi gee gaava kaden samaposha packet ekak aragena giyaa',
    expected: 'මම ගෙදර යද්දි ගේ ගාව කඩෙන් සමපොශ packet එකක් අරගෙන ගියා', 
    type: 'M'
  },

  {
    id: 'Pos_Fun_0023',
    description: 'Interrogative: time',
    input: 'heta udhee 8.00 ta thiyana lecture ekata yanna udhenma naegitinna onii.',
    expected: 'හෙට උදේ 8.00 ට තියන lecture එකට යන්න උදෙන්ම නැගිටින්න ඔනී.', 
    type: 'M'
  },

  {
    id: 'Pos_Fun_0024',
    description: 'Interrogative:English technical terms',
    input: 'api anidhdhaata yana trip eka gaena visthara mama apee whatsapp group ekata dhaemmaa.',
    expected: 'අපි අනිද්දාට යන trip එක ගැන විස්තර මම අපේ whatsapp group එකට දැම්මා.', 
    type: 'M'
  },
  
  // --- NEGATIVE SCENARIOS ---
  {
    id: 'Neg_Fun_0001',
    description: 'Invalid characters: Alphabetic mix',
    input: 'www.spaceylon.com',
    expected: 'www.spaceylon.com', 
    type: 'S'
  },

  {
    id: 'Neg_Fun_0002',
    description: 'Invalid characters: Email address',
    input: 'ashanthi@gmail.com',
    expected: 'ashanthi@gmail.com', 
    type: 'S'
  },

   {
    id: 'Neg_Fun_0003',
    description: 'Invalid characters: Mixed alphanumeric',
    input: 'Dalada maligaavee perahera balanna api haemoma giyaa.',
    expected: 'දලදා මලිගාවේ perahera බලන්න අපි හැමොම ගියා.', 
    type: 'S'
  },

  {
    id: 'Neg_Fun_0004',
    description: 'Invalid characters: Mixed alphanumeric',
    input: 'kaelaeewe pipena mal harima lassanayi.',
    expected: 'කැලෑවේ පිපෙන මල් හරිම ලස්සනයි.', 
    type: 'S'
  },

   {
    id: 'Neg_Fun_0005',
    description: 'Invalid characters: Mixed alphanumeric',
    input: 'mama kadee gihin rs.200 saban Kaetayakgaththaa.',
    expected: 'මම කඩේ ගිහින් rs.200 සබන් ඛැටයක් ගත්තා.', 
    type: 'S'
  },

 {
    id: 'Neg_Fun_0006',
    description: 'Invalid characters: Mixed alphanumeric',
    input: 'Hetaapiyanawa',
    expected: 'හෙට අපි යනවා', 
    type: 'S'
  },

   {
    id: 'Neg_Fun_0007',
    description: 'Invalid characters: Mixed alphanumeric',
    input: 'eyakovilatayaddimalwalakoluwegahanyanawa',
    expected: 'ඇය කොවිලට යද්දි මල් වැලක් ඔලුවේ ගහන් යනවා', 
    type: 'S'
  },

  {
    id: 'Neg_Fun_0008',
    description: 'Invalid characters: Mixed alphanumeric',
    input: 'mama 177 bus eke kollupitiyata yanawa.',
    expected: 'මම 177 bus eke කොල්ලුපිටියට යනවා.', 
    type: 'S'
  },

 

 {
    id: 'Neg_Fun_0009',
    description: 'Invalid characters: Mixed alphanumeric',
    input: 'colomba raeeta lassanai',
    expected: 'කොළඹ රෑට ලස්සනයි', 
    type: 'S'
  },

  {
    id: 'Neg_Fun_0010',
    description: 'Invalid characters: Mixed alphanumeric',
    input: 'adooo meke kama supiriiiii ban',
    expected: 'ado මෙකෙ කෑම සුපිරී බන්', 
    type: 'S'
  },


  
  // --- UI SCENARIO ---
  {
    id: 'Pos_UI_0001',
    description: 'Verify input clears or updates',
    input: 'mama pansal yanavaa',
    expected: 'mama pansal yanavaa', 
    type: 'ui'
  }
];

test.describe('IT3040 Assignment 1 - Translation Test Suite', () => {

  test.beforeEach(async ({ page }) => {
    // *** OPTION 1 URL *** (Sinhala)
    await page.goto('https://www.swifttranslator.com/');
  });

  for (const data of testCases) {
    test(`${data.id}: ${data.description}`, async ({ page }) => {
      
      // 1. Locate Input (The textarea)
      const inputBox = page.locator('textarea').first();
      
      // 2. Clear and Type
      await inputBox.click();
      await inputBox.clear();
      await inputBox.fill(data.input);

      // 3. Wait for translation (3 seconds)
      await page.waitForTimeout(3000);

      // 4. Locate Output (The DIV we found in your logs)
      // We use the specific classes 'w-full' and 'whitespace-pre-wrap' to identify it uniquely
      const outputBox = page.locator('div.w-full.whitespace-pre-wrap').first();
      
      // 5. Get text
      // Since it is a DIV, we use .innerText() (not .inputValue)
      const actualOutput = await outputBox.innerText();

      // 6. Log result
      console.log(`\n--- TEST REPORT: ${data.id} ---`);
      console.log(`Input:    ${data.input}`);
      console.log(`Expected: ${data.expected}`);
      console.log(`Actual:   ${actualOutput}`);

      // 7. Assertion
      if (data.type === 'positive') {
         expect(actualOutput).toContain(data.expected);
      }
    });
  }
});