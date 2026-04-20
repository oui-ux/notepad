const entriesEl = document.getElementById('entries');
const tpl = document.getElementById('entryTemplate');
let entryCount = 0;
let removedEntryData = null;

/**
 * Helper: builds a standardized 4-part structure.
 */
function makeConcernParts({ userCalling = '', rootCause = '', troubleshooting = '', kb = '' }) {
  return { userCalling, rootCause, troubleshooting, kb };
}

/**
 * Helper: join troubleshooting array cleanly.
 */
function joinLines(lines) {
  return (lines || []).join('\n');
}

function getIOSPasskeyParts() {
  return makeConcernParts({
    userCalling:
      'User is calling because user needs help with setting up a passkey on iOS device, user does not a passkey currently, impacting capability of user to log in',
    rootCause:
      'Root Cause: user was not able to follow the guide on the self-service portal to add passkey on IOS device, hence why user called GHD',
    troubleshooting: joinLines([
      'Troubleshooting Steps:',
      '',
      '>user called in because user needs help with setting-up passkey for IOS device',
      '>user has an iPhone (enter device)',
      '>IOS version is (enter version)',
      '>autofill set to authenticator',
      '>made sure that bluetooth is turned on, on both devices',
      '>went to aka.ms/mysignin',
      '>add passkey',
      '>scanned the QR code using camera of the phone',
      '>passkey was added',
      '>resolved',
      '',
      'Remote Session Permission: Yes',
      'Sensitive/Confidential Statement Provided: Yes',
      'Remote Session Completed: Yes',
      'Issue Resolved: Yes',
      'User Confirmed Resolution: Yes',
      'Permission to Close Ticket: Yes'
    ]),
    kb: 'KB0073293 : Cloud MFA: Phishing-resistant MFA overview'
  });
}

// not yet done
function getAndroidPasskeyParts() {
  return makeConcernParts({
    userCalling:
      'User is calling in because device wants to enroll a passkey on android device, affecting capability of user to access resources on phone',
    rootCause:
      'Root cause: user was not able to find any links to follow on how to add a passkey on an android phone, hence why user called GHD',
    troubleshooting: joinLines([
      'Troubleshooting Steps:',
      '',
      '>user called because user needs help with setting up a passkey on android device ',
      '>autofill set to authenticator on phone settings',
      '>went to aka.ms/mysignin',
      '>add passkey',
      '>scan qr code using authenticator',
      '>was able to add passkey',
      '>resolved',
      '',
      'Remote Session Permission: yes',
      'Sensitive/Confidential Statement Provided: yes',
      'Remote Session Completed: yes',
      'Issue Resolved: Yes',
      'User Confirmed Resolution: Yes',
      'Permission to Close Ticket: Yes'
    ]),
    kb: 'KB0073293 : Cloud MFA: Phishing-resistant MFA overview'
  });
}

function getiOS_newParts() {
  return makeConcernParts({
    userCalling:
      'User is calling in, because user cannot access microsoft resources on iOS device, impacting capability to access resources on phone',
    rootCause:
      'Root Cause: User is calling in because user was not able to find any links to follow, hence why user is calling GHD',
    troubleshooting: joinLines([
      'Troubleshooting Steps:',
      '',
      '>user called in because user needs help with enrolling iOS device to microsoft',
      '>user has an iPhone (enter device)',
      '>IOS version is (enter version)',
      '>stolen device protection is turned off',
      '>made sure that phone has a passkey',
      '>installed company portal',
      '>logged in to company portal',
      '>management profile installed',
      '>went to device settings',
      '>search for VPN> click on management profile',
      '>Install management profile',
      '>defender was installed',
      '>logged in to defender',
      '>checked compliance',
      '>all green',
      '>logged in to teams and outlook',
      '>resolved',
      '',
      'Remote Session Permission: no',
      'Sensitive/Confidential Statement Provided: no',
      'Remote Session Completed: no',
      'Issue Resolved: Yes',
      'User Confirmed Resolution: Yes',
      'Permission to Close Ticket: Yes'
    ]),
    kb: 'KB0054377 : IOS: iOS and iPadOS device enrollment'
  });
}

function getWindows_passkeyParts() {
  return makeConcernParts({
    userCalling:
      'User is calling in, because user cannot access microsoft resources on Windows device, impacting capability to access resources on device',
    rootCause:
      'Root Cause: User is calling in because user was not able to find any links to follow to enroll passkey on windows, hence why user is calling GHD',
    troubleshooting: joinLines([
      'Troubleshooting Steps:',
      '',
      '>user called in because user needs help with enrolling a passkey on a microsoft laptop',
      '>quick assist with user',
      '>windows version is (enter OS version)',
      '>made sure that there were no pending updates',
      '>updated windows ',
      '>went to aka.ms/mysignin',
      '>added passkey ',
      '>resolved',
      '',
      'Remote Session Permission: Yes',
      'Sensitive/Confidential Statement Provided: Yes',
      'Remote Session Completed: Yes',
      'Issue Resolved: Yes',
      'User Confirmed Resolution: Yes',
      'Permission to Close Ticket: Yes'
    ]),
    kb: 'KB0073293 : Cloud MFA: Phishing-resistant MFA overview'
  });
}

function getandroid_newParts() {
  return makeConcernParts({
    userCalling:
      'User is calling in because device wants to access resources on android device, affecting his capability to access resources on phone',
    rootCause:
      'Root cause: user is calling in because user was not able to find any links to follow to enroll phone to microsoft domain, hence why user is calling GHD',
    troubleshooting: joinLines([
      'Troubleshooting Steps:',
      '',
      '>user called because user needs help with setting up android device to access microsoft resources',
      '>user has a passkey on device',
      '>installed company portal',
      '>logged in to company portal',
      '>work profile was created',
      '>went to aka.ms/mysignin',
      '>add passkey',
      '>scan qr code using authenticator using work profile camera',
      '>was able to add passkey',
      'logged in to company portal on work profile using passkey',
      '>resolved',
      '',
      'Remote Session Permission: No',
      'Sensitive/Confidential Statement Provided: No',
      'Remote Session Completed: No',
      'Issue Resolved: Yes',
      'User Confirmed Resolution: Yes',
      'Permission to Close Ticket: Yes'
    ]),
    kb: ''
  });
}

function getwindows_deviceComplianceParts_update() {
  return makeConcernParts({
    userCalling:
      'Unable to access MS Resources, impacting capability of user to do work on the device',
    rootCause:
      'Root cause: there is an incompliance on the device of the user that is causing user to not be able to login to device, user is not aware of any self-service options, hence why user called GHD',
    troubleshooting: joinLines([
      'Troubleshooting Steps',
      '',
      '>user called in because user cannot access device',
      '>quick assist with user',
      '>went to aka.ms/cpweb',
      '>needs the device to be updated to be able to access resources',
      '>ran updates on windows update',
      '>synced the device',
      '>restarted',
      '>resolved',
      '',
      'Remote Session Permission: yes',
      'Sensitive/Confidential Statement Provided: yes',
      'Remote Session Completed: yes',
      'Issue Resolved: Yes',
      'User Confirmed Resolution: Yes',
      'Permission to Close Ticket: Yes'
    ]),
    kb: 'KB0074812 : Windows: Windows Update, Upgrade and Troubleshooting'
  });
}
function getwindows_deviceComplianceParts_sync() {
  return makeConcernParts({
    userCalling:
      'Unable to access MS Resources, impacting capability of user to do work on the device',
    rootCause:
      'Root cause: there is an incompliance on the device of the user that is causing user to not be able to login to device, user is not aware of any self-service options, hence why user called GHD',
    troubleshooting: joinLines([
      'Troubleshooting Steps',
      '',
      '>user called in because user cannot access device',
      '>quick assist with user',
      '>went to aka.ms/cpweb',
      '>needs the device to be synced to be able to access resources',
      '>went to device settings -> accounts -> selected microsoft account',
      '>synced the device',
      '>restarted',
      '>resolved',
      '',
      'Remote Session Permission: yes',
      'Sensitive/Confidential Statement Provided: yes',
      'Remote Session Completed: yes',
      'Issue Resolved: Yes',
      'User Confirmed Resolution: Yes',
      'Permission to Close Ticket: Yes'
    ]),
    kb: 'KB0074812 : Windows: Windows Update, Upgrade and Troubleshooting'
  });
}


function getidentity_passParts() {
  return makeConcernParts({
    userCalling:
      'User is calling in because, user cannot sign in to microsoft resources, impacting the capability of user to access resources',
    rootCause:
      'Root cause: user does not have a passkey, user does not know any self-service links to follow, hence why user called GHD',
    troubleshooting: joinLines([
      'Troubleshooting Steps',
      '',
      '>user called in because user can not sign in to microsoft resources',
      '>user needs to login to device',
      '>user does not have a passkey',
      '>guided user to install identity pass',
      '>user was able to understand the process',
      '>resolved',
      '',
      'Remote Session Permission: No',
      'Sensitive/Confidential Statement Provided: No',
      'Remote Session Completed: No',
      'Issue Resolved: Yes',
      'User Confirmed Resolution: Yes',
      'Permission to Close Ticket: Yes'
    ]),
    kb: 'KB0072424 : Identity Pass: Identity Pass Instructions for Users'
  });
}

function getRAS_accessParts() {
  return makeConcernParts({
    userCalling:
      'User is calling in because, user cannot sign in to azure VPN, impacting the capability of user to access resources',
    rootCause:
      'Root cause: user has not created a request for RAS access yet, user does not know where to go to for this concern, hence why user called GHD ',
    troubleshooting: joinLines([
      'Troubleshooting Steps',
      '',
      '>user called in because user can not sign in to Azure VPN',
      '>user needs to login to the VPN to access resources',
      '>user has not submitted a RAS access',
      '>guided user to submit RAS acces using avdweb',
      '>went to aka.ms/coreidentity',
      '>requested for RAS access',
      '>resolved',
      '',
      'Remote Session Permission: yes',
      'Sensitive/Confidential Statement Provided: yes',
      'Remote Session Completed: yes',
      'Issue Resolved: Yes',
      'User Confirmed Resolution: Yes',
      'Permission to Close Ticket: Yes'
    ]),
    kb: 'KB0024199 : RAS: How to request/review permissions (including non-FTE)'
  });
}

function getSAWParts() {
  return makeConcernParts({
    userCalling:
      ' user has a concern about his saw machine , impacting his capability to do work',
    rootCause:
      'Root cause: user is having an issue with SAW machine, does not know any self-service portal, hence why user is calling GHD ',
    troubleshooting: joinLines([
      'Troubleshooting Steps:',
      '',
      '>user is calling in for concern about saw machine',
      '>directed user to link for saw support',
      '>https://cloudmfa.support.windows.net/SawSupportServices/SawSupport',
      '>user was able to understand the process',
      '>resolved',
      '',
      'Remote Session Permission: No',
      'Sensitive/Confidential Statement Provided: No',
      'Remote Session Completed: No',
      'Issue Resolved: Yes',
      'User Confirmed Resolution: Yes',
      'Permission to Close Ticket: Yes'
    ]),
    kb: 'KB0074976 : SAW: New Support Overview'
  });
}

function getWindows_ActivationParts() {
  return makeConcernParts({
    userCalling:
      ' user called in because there is an error with the license for the Operating System',
    rootCause:
      'Root cause: the device of user has pending windows update, synced device to intune, user was not aware of any Self-service options to follow, hence why user called GHD ',
    troubleshooting: joinLines([
      'Troubleshooting Steps:',
      '',
      '>user called in because there is an error with the license for the Operating System',
      '>quick assist with user',
      '>updated windows ',
      '>connected to azure VPN',
      '>synced',
      '>resolved',
      '',
      'Remote Session Permission: yes',
      'Sensitive/Confidential Statement Provided: yes',
      'Remote Session Completed: yes',
      'Issue Resolved: Yes',
      'User Confirmed Resolution: Yes',
      'Permission to Close Ticket: Yes'
    ]),
    kb: 'KB0074812 : Windows: Windows Update, Upgrade and Troubleshooting'
  });
}

function getAzureVPN_taskbarParts() {
  return makeConcernParts({
    userCalling:
      ' User is having issues with not being able to connect to Azure VPN, impacting capability of user to do work',
    rootCause:
      'Root cause: user is having issues with connecting to VPN, user was not aware of any self-service portal to follow, hence why user called GHD',
    troubleshooting: joinLines([
      'Troubleshooting Steps:',
      '',
      '>user user was not able to connect to Azure VPN',
      '>quick assist with user',
      '>user was connecting via the taskbar, not the client',
      '>advised user to connect via the client',
      '>connected',
      '>resolved',
      '',
      'Remote Session Permission: yes',
      'Sensitive/Confidential Statement Provided: yes',
      'Remote Session Completed: yes',
      'Issue Resolved: Yes',
      'User Confirmed Resolution: Yes',
      'Permission to Close Ticket: Yes'
    ]),
    kb: 'KB0071771 : Azure VPN'
  });
}

function getDeletedDeviceParts() {
  return makeConcernParts({
    userCalling:
      ' user has an old laptop that user cannot connect to, impacting capability of the user to do work',
    rootCause:
      'Root cause: user cannot access resources on phone, user tried to use self-service options, but was not able to do so, hence why user called GHD',
    troubleshooting: joinLines([
      'Troubleshooting Steps:',
      '',
      '>user called because user can not access resources on device',
      '>quick assist with user',
      '>device is deleted upon checking compliance',
      '>reset the device',
      '>user has a passkey on phone',
      '>logged in to newly reset device',
      '>resolved',
      '',
      'Remote Session Permission: yes',
      'Sensitive/Confidential Statement Provided: yes',
      'Remote Session Completed: yes',
      'Issue Resolved: Yes',
      'User Confirmed Resolution: Yes',
      'Permission to Close Ticket: Yes'
    ]),
    kb:
      'KB0069799 : Windows 11: Your Organization has deleted\\disabled your device and/or lost corpnet connection (no MSFTVPN) due to a long inactivity in the corporate network'
  });
}

function getDisabledDeviceParts() {
  return makeConcernParts({
    userCalling:
      ' user has an old laptop that user cannot connect to, impacting capability of the user to do work',
    rootCause:
      'Root cause: user cannot access resources on phone, user tried to use self-service options, but was not able to do so, hence why user called GHD',
    troubleshooting: joinLines([
      'Troubleshooting Steps:',
      '',
      '>user called because user can not access resources on device',
      '>quick assist with user',
      '>device is disabled upon checking compliance',
      '>attached image',
      '>needs help of the accounts team',
 
      
    ]),
    kb:
      'KB0069799 : Windows 11: Your Organization has deleted\\disabled your device and/or lost corpnet connection (no MSFTVPN) due to a long inactivity in the corporate network'
  });
}

function getbitlockParts() {
  return makeConcernParts({
    userCalling:
      ' user called because user cannot access windows device, it is on bitlock, impacting the capability of user to do work',
    rootCause:
      'Root cause:  user called GHD because bitlocker key for device was not available on self-service portal, hence why user called GHD',
    troubleshooting: joinLines([
      'Troubleshooting Steps:',
      '',
      '>user is in bitlock',
'>user was not able to get recovery key on self-service portal',
'>device is not listed',
'>authenticated',
'>user sent the recovery on teams',
'>waiting for the bitlock key request',
'>will ping user once key is available',
 
      
    ]),
    kb:
      
'KB0065685 : BitLocker: Retrieve Your BitLocker Key'
  });
}

function getvalidphonesParts() {
  return makeConcernParts({
    userCalling:
      ' user called because user cannot access resources on android device, impacting the capability of user to access resources on phone',
    rootCause:
      'Root cause:  user called GHD because user was not aware of any self-service links to follow, hence why user called GHD',
    troubleshooting: joinLines([
      'Troubleshooting Steps:',
      '',
      '>user is in bitlock',
'>user was not able to get recovery key on self-service portal',
'>device is not listed',
'>authenticated',
'>user sent the recovery on teams',
'>waiting for the bitlock key request',
'>will ping user once key is available',
 
      
    ]),
    kb:
      
'KB0065685 : BitLocker: Retrieve Your BitLocker Key'
  });
}


function getConcernPartsByType(type) {
  if (type === 'ios_passkey') return getIOSPasskeyParts();
  if (type === 'valid_phones') return getvalidphonesParts();
  if (type === 'bitlock') return getbitlockParts();
  if (type === 'android_passkey') return getAndroidPasskeyParts();
  if (type === 'iOS_new') return getiOS_newParts();
  if (type === 'windows_passkey') return getWindows_passkeyParts();
  if (type === 'android_new') return getandroid_newParts();
  if (type === 'identity_pass') return getidentity_passParts();
  if (type === 'RAS_access') return getRAS_accessParts();
  if (type === 'SAW') return getSAWParts();
  if (type === 'windows_deviceCompliance_update') return getwindows_deviceComplianceParts_update();
  if (type === 'windows_deviceCompliance_sync') return getwindows_deviceComplianceParts_sync();
  if (type === 'windows_Activation') return getWindows_ActivationParts();
  if (type === 'AzureVPN_taskbar') return getAzureVPN_taskbarParts();
  if (type === 'Deleted_device') return getDeletedDeviceParts();

  return makeConcernParts({
    userCalling: 'Select a concern type.',
    rootCause: '',
    troubleshooting: '',
    kb: ''
  });
}

function buildUserInfo(entry) {
  let rootCause = entry.querySelector('.rootCauseInfo').value.trim();
  // If input is exactly 'root cause' (with or without colon/space), display only 'Root cause:'
  if (/^root cause[:：]?\s*$/i.test(rootCause)) {
    rootCause = 'Root cause:';
  } else if (/^root cause[:：]?/i.test(rootCause)) {
    // If input starts with 'Root cause:' and has more text, display as is (normalize label)
    rootCause = rootCause.replace(/^root cause[:：]?\s*/i, 'Root cause: ');
  } else if (rootCause.length > 0) {
    // Otherwise, prepend label
    rootCause = 'Root cause: ' + rootCause;
  }
  return [
    rootCause,
    `Time Zone: ${entry.querySelector('.timezone').value}`,
    `Business Hours: ${entry.querySelector('.businessHours').value}`,
    `Best Contact Number: ${entry.querySelector('.bestContactNumber').value}`,
    `Alternate Contact Number: ${entry.querySelector('.alternateContactNumber').value}`
  ].join('\n');
}

async function copy(text, btn) {
  await navigator.clipboard.writeText(text);
  if (btn) {
    const old = btn.textContent;
    btn.textContent = 'Copied!';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = old;
      btn.disabled = false;
    }, 800);
  }
}

function fillConcernOutputs(entry, parts) {
  entry.querySelector('.userCallingOutput').value = parts.userCalling || '';
  entry.querySelector('.rootCauseOutput').value = parts.rootCause || '';
  entry.querySelector('.troubleshootingOutput').value = parts.troubleshooting || '';
  entry.querySelector('.kbOutput').value = parts.kb || '';

  // Hidden legacy output (optional combined)
  const legacy = [
    parts.userCalling,
    '',
    parts.rootCause,
    '',
    parts.troubleshooting,
    '',
    parts.kb
  ].filter(Boolean).join('\n');
  entry.querySelector('.concernOutput').textContent = legacy;
}

function addEntry() {
  entryCount++;
  const node = tpl.content.firstElementChild.cloneNode(true);
  node.querySelector('.entryNumber').textContent = entryCount;
  entriesEl.appendChild(node);

  // Initialize empty outputs
  fillConcernOutputs(node, makeConcernParts({}));
}

entriesEl.addEventListener('click', async (e) => {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  const entry = btn.closest('.entry');
  const action = btn.dataset.action;

  if (action === 'display') {
    entry.querySelector('.userOutput').textContent = buildUserInfo(entry);
  }

  if (action === 'copy') {
    const out = entry.querySelector('.userOutput');
    if (!out.textContent.trim()) {
      out.textContent = buildUserInfo(entry);
    }
    await copy(out.textContent, btn);
  }

  if (action === 'steps') {
    const type = entry.querySelector('.concernType').value;
    const parts = getConcernPartsByType(type);
    fillConcernOutputs(entry, parts);
  }

  // Copy (Free text / Full output)
  if (action === 'copy-steps') {
    const issue = entry.querySelector('.issueText').value.trim();
    if (issue) {
      await copy(issue, btn);
      return;
    }

    // If free text empty, copy the combined hidden output instead
    const legacyOut = entry.querySelector('.concernOutput');
    if (!legacyOut.textContent.trim()) {
      btn.closest('.card').querySelector('[data-action="steps"]').click();
    }
    await copy(legacyOut.textContent, btn);
  }

  // NEW: dedicated copy buttons per textbox
  if (action === 'copy-usercalling') {
    await copy(entry.querySelector('.userCallingOutput').value, btn);
  }
  if (action === 'copy-rootcause') {
    await copy(entry.querySelector('.rootCauseOutput').value, btn);
  }
  if (action === 'copy-troubleshooting') {
    await copy(entry.querySelector('.troubleshootingOutput').value, btn);
  }
  if (action === 'copy-kb') {
    await copy(entry.querySelector('.kbOutput').value, btn);
  }
  if (action === 'copy-freetext') {
    await copy(entry.querySelector('.issueText').value, btn);
  }

  if (action === 'remove') {
    // Store entry data for undo including all form values
    const inputs = entry.querySelectorAll('input, textarea, select');
    const formData = {};
    inputs.forEach(input => {
      formData[input.className] = input.value;
    });
    removedEntryData = {
      html: entry.outerHTML,
      formData: formData,
      entryNumber: entry.querySelector('.entryNumber').textContent
    };
    entry.remove();
    document.getElementById('btnUndoRemove').style.display = 'inline-block';
  }
  if (action === 'toggle') entry.classList.toggle('collapsed');

  // Toggle free text visibility
  if (action === 'toggle-free-text') {
    const freeText = entry.querySelector('.freeTextDetails');
    const concernDetails = entry.querySelector('.concernDetails');
    const btn = entry.querySelector('[data-action="toggle-free-text"]');
    const textarea = entry.querySelector('.issueText');
    if (freeText.style.display === 'none') {
      // Pre-fill template if empty
      if (!textarea.value.trim()) {
        textarea.value ='Troubleshooting Steps:\n\n\n\n \nRemote Session Permission: Yes\nSensitive/Confidential Statement Provided: Yes\nRemote Session Completed: Yes\nIssue Resolved: Yes\nUser Confirmed Resolution: Yes\nPermission to Close Ticket: Yes';
      }
      freeText.style.display = 'block';
      concernDetails.style.display = 'none';
      btn.textContent = 'Hide Free Text';
    } else {
      freeText.style.display = 'none';
      concernDetails.style.display = 'block';
      btn.textContent = 'Show Free Text';
    }
  }

  // Copy Troubleshooting Steps
  if (action === 'copy-troubleshooting') {
    const textarea = entry.querySelector('.issueText');
    await copy(textarea.value, btn);
  }

  // Copy Escalation
  if (action === 'copy-escalation') {
    const textarea = entry.querySelector('.escalationText');
    await copy(textarea.value, btn);
  }
});

// Handle tab selection dropdown change
entriesEl.addEventListener('change', async (e) => {
  if (e.target.classList.contains('tabSelect')) {
    const entry = e.target.closest('.entry');
    const troubleshootingContent = entry.querySelector('.troubleshootingContent');
    const escalationContent = entry.querySelector('.escalationContent');
    const escalationTextarea = entry.querySelector('.escalationText');
    if (e.target.value === 'troubleshooting') {
      troubleshootingContent.style.display = 'block';
      escalationContent.style.display = 'none';
    } else {
      troubleshootingContent.style.display = 'none';
      escalationContent.style.display = 'block';
      // Pre-fill escalation template if empty
      if (!escalationTextarea.value.trim()) {
        escalationTextarea.value = 'Issue (I) - \nError Message (E) - \nCause (C) - \nTroubleshooting Steps:\n\n\nBug Number (BN) -\nSystem Info (SI) -';
      }
    }
  }
});

document.getElementById('btnAddEntry').onclick = addEntry;
document.getElementById('btnUndoRemove').onclick = () => {
  if (removedEntryData) {
    const temp = document.createElement('div');
    temp.innerHTML = removedEntryData.html;
    const restoredEntry = temp.firstElementChild;
    entriesEl.appendChild(restoredEntry);
    // Restore form values
    const inputs = restoredEntry.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      if (removedEntryData.formData[input.className] !== undefined) {
        input.value = removedEntryData.formData[input.className];
      }
    });
    removedEntryData = null;
    document.getElementById('btnUndoRemove').style.display = 'none';
  }
};
document.getElementById('btnCollapseAll').onclick = () =>
  document.querySelectorAll('.entry').forEach((e) => e.classList.add('collapsed'));
document.getElementById('btnExpandAll').onclick = () =>
  document.querySelectorAll('.entry').forEach((e) => e.classList.remove('collapsed'));

// Dark mode toggle
const darkToggle = document.getElementById('darkModeToggle');
if (darkToggle) {
  darkToggle.addEventListener('change', (e) => {
    document.body.classList.toggle('dark-mode', e.target.checked);
  });
}

addEntry();
