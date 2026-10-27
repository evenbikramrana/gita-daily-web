// Site-wide config.

// Google Analytics 4 Measurement ID (looks like "G-XXXXXXXXXX").
// Find it in GA Admin → Data Streams → your web stream → Measurement ID.
// Leave empty to disable analytics entirely (nothing is loaded).
// It ships in the public HTML, so it is safe to commit here.
export const GA_MEASUREMENT_ID = 'G-TBP4PBJJ3H';

// Google Play listing. Every "Get the app" link goes through playUrl(placement) so installs can be
// attributed: utm_* shows in Play Console's acquisition reports, and `referrer` reaches the app via
// the Play Install Referrer (Firebase/GA4 reads it as the install's source/campaign).
export const PLAY_APP_ID = 'org.gitadaily.app';

export function playUrl(placement: string): string {
  const utm = `utm_source=gitadaily.org&utm_medium=website&utm_campaign=${placement}`;
  return `https://play.google.com/store/apps/details?id=${PLAY_APP_ID}&${utm}&referrer=${encodeURIComponent(utm)}`;
}
