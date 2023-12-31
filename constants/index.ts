import {
  SideNavItem,
  MembersDataItem,
  ModalItem,
  Events,
  Sponsors,
} from "@/types/types";

export const SIDEBAR_MENU: SideNavItem[] = [
  {
    iconURL: "/icon/sidebar/home.svg",
    name: "Home",
    path: "/",
  },
  {
    iconURL: "/icon/sidebar/member.svg",
    name: "Member",
    path: "/member",
  },
  {
    iconURL: "/icon/sidebar/event.svg",
    name: "Event",
    path: "/event",
  },
  {
    iconURL: "/icon/sidebar/sponsor.svg",
    name: "Sponsor",
    path: "/sponsor",
  },
  {
    iconURL: "/icon/sidebar/profile.svg",
    name: "Profile",
    path: "/profile",
  },
];

export const MEMBERS_DATA: MembersDataItem[] = [
  {
    iconURL: "/logo/Ellipse 2.svg",
    name: "Parth",
    path: "/profile",
    position: "Lead",
    kiit_email_id: "john.doe@kiit.ac.in",
    personal_email_id: "john.doe@example.com",
    phone: 1234567890,
    current_year: 3,
    branch: "CSE",
    roll_number: 2023001,
    type: "lead",
    portfolio_website: "https://john.doe.portfolio",
    github_URL: "https://github.com/johndoe",
    instagram_URL: "https://instagram.com/johndoe",
    linkedIn_URL: "https://linkedin.com/in/johndoe",
    facebook_URL: "https://facebook.com/johndoe",
    behance_URL: "https://behance.net/johndoe",
    dribble_URL: "https://dribbble.com/johndoe",
    youtube_URL: "https://youtube.com/johndoe",
    x_URL: "https://x.johndoe.com",
    drive_URL: "https://drive.google.com/john",
  },
  {
    iconURL: "/logo/Ellipse 2.svg",
    name: "sachi",
    path: "/profile",
    position: "Lead",
    kiit_email_id: "john.doe@kiit.ac.in",
    personal_email_id: "john.doe@example.com",
    phone: 1234567890,
    current_year: 3,
    branch: "CSE",
    roll_number: 2023001,
    type: "lead",
    portfolio_website: "https://john.doe.portfolio",
    github_URL: "https://github.com/johndoe",
    instagram_URL: "https://instagram.com/johndoe",
    linkedIn_URL: "https://linkedin.com/in/johndoe",
    facebook_URL: "https://facebook.com/johndoe",
    behance_URL: "https://behance.net/johndoe",
    dribble_URL: "https://dribbble.com/johndoe",
    youtube_URL: "https://youtube.com/johndoe",
    x_URL: "https://x.johndoe.com",
    drive_URL: "https://drive.google.com/john",
  },
  {
    iconURL: "/logo/Ellipse 2.svg",
    name: "Harsh",
    path: "/profile",
    position: "Lead",
    kiit_email_id: "john.doe@kiit.ac.in",
    personal_email_id: "john.doe@example.com",
    phone: 1234567890,
    current_year: 3,
    branch: "CSE",
    roll_number: 2023001,
    type: "lead",
    portfolio_website: "https://john.doe.portfolio",
    github_URL: "https://github.com/johndoe",
    instagram_URL: "https://instagram.com/johndoe",
    linkedIn_URL: "https://linkedin.com/in/johndoe",
    facebook_URL: "https://facebook.com/johndoe",
    behance_URL: "https://behance.net/johndoe",
    dribble_URL: "https://dribbble.com/johndoe",
    youtube_URL: "https://youtube.com/johndoe",
    x_URL: "https://x.johndoe.com",
    drive_URL: "https://drive.google.com/john",
  },
  {
    iconURL: "/logo/Ellipse 2.svg",
    name: "Harshit",
    path: "/profile",
    position: "Lead",
    kiit_email_id: "john.doe@kiit.ac.in",
    personal_email_id: "john.doe@example.com",
    phone: 1234567890,
    current_year: 3,
    branch: "CSE",
    roll_number: 2023001,
    type: "lead",
    portfolio_website: "https://john.doe.portfolio",
    github_URL: "https://github.com/johndoe",
    instagram_URL: "https://instagram.com/johndoe",
    linkedIn_URL: "https://linkedin.com/in/johndoe",
    facebook_URL: "https://facebook.com/johndoe",
    behance_URL: "https://behance.net/johndoe",
    dribble_URL: "https://dribbble.com/johndoe",
    youtube_URL: "https://youtube.com/johndoe",
    x_URL: "https://x.johndoe.com",
    drive_URL: "https://drive.google.com/john",
  },
  {
    iconURL: "/logo/Ellipse 2.svg",
    name: "Amaan",
    path: "/profile",
    position: "Lead",
    kiit_email_id: "john.doe@kiit.ac.in",
    personal_email_id: "john.doe@example.com",
    phone: 1234567890,
    current_year: 3,
    branch: "CSE",
    roll_number: 2023001,
    type: "lead",
    portfolio_website: "https://john.doe.portfolio",
    github_URL: "https://github.com/johndoe",
    instagram_URL: "https://instagram.com/johndoe",
    linkedIn_URL: "https://linkedin.com/in/johndoe",
    facebook_URL: "https://facebook.com/johndoe",
    behance_URL: "https://behance.net/johndoe",
    dribble_URL: "https://dribbble.com/johndoe",
    youtube_URL: "https://youtube.com/johndoe",
    x_URL: "https://x.johndoe.com",
    drive_URL: "https://drive.google.com/john",
  },
  {
    iconURL: "/logo/Ellipse 2.svg",
    name: "Parth",
    path: "/profile",
    position: "Lead",
    kiit_email_id: "john.doe@kiit.ac.in",
    personal_email_id: "john.doe@example.com",
    phone: 1234567890,
    current_year: 3,
    branch: "CSE",
    roll_number: 2023001,
    type: "lead",
    portfolio_website: "https://john.doe.portfolio",
    github_URL: "https://github.com/johndoe",
    instagram_URL: "https://instagram.com/johndoe",
    linkedIn_URL: "https://linkedin.com/in/johndoe",
    facebook_URL: "https://facebook.com/johndoe",
    behance_URL: "https://behance.net/johndoe",
    dribble_URL: "https://dribbble.com/johndoe",
    youtube_URL: "https://youtube.com/johndoe",
    x_URL: "https://x.johndoe.com",
    drive_URL: "https://drive.google.com/john",
  },
  {
    iconURL: "/logo/Ellipse 2.svg",
    name: "sachi",
    path: "/profile",
    position: "Lead",
    kiit_email_id: "john.doe@kiit.ac.in",
    personal_email_id: "john.doe@example.com",
    phone: 1234567890,
    current_year: 3,
    branch: "CSE",
    roll_number: 2023001,
    type: "lead",
    portfolio_website: "https://john.doe.portfolio",
    github_URL: "https://github.com/johndoe",
    instagram_URL: "https://instagram.com/johndoe",
    linkedIn_URL: "https://linkedin.com/in/johndoe",
    facebook_URL: "https://facebook.com/johndoe",
    behance_URL: "https://behance.net/johndoe",
    dribble_URL: "https://dribbble.com/johndoe",
    youtube_URL: "https://youtube.com/johndoe",
    x_URL: "https://x.johndoe.com",
    drive_URL: "https://drive.google.com/john",
  },
  {
    iconURL: "/logo/Ellipse 2.svg",
    name: "Harsh",
    path: "/profile",
    position: "Lead",
    kiit_email_id: "john.doe@kiit.ac.in",
    personal_email_id: "john.doe@example.com",
    phone: 1234567890,
    current_year: 3,
    branch: "CSE",
    roll_number: 2023001,
    type: "lead",
    portfolio_website: "https://john.doe.portfolio",
    github_URL: "https://github.com/johndoe",
    instagram_URL: "https://instagram.com/johndoe",
    linkedIn_URL: "https://linkedin.com/in/johndoe",
    facebook_URL: "https://facebook.com/johndoe",
    behance_URL: "https://behance.net/johndoe",
    dribble_URL: "https://dribbble.com/johndoe",
    youtube_URL: "https://youtube.com/johndoe",
    x_URL: "https://x.johndoe.com",
    drive_URL: "https://drive.google.com/john",
  },
  {
    iconURL: "/logo/Ellipse 2.svg",
    name: "Harshit",
    path: "/profile",
    position: "Lead",
    kiit_email_id: "john.doe@kiit.ac.in",
    personal_email_id: "john.doe@example.com",
    phone: 1234567890,
    current_year: 3,
    branch: "CSE",
    roll_number: 2023001,
    type: "lead",
    portfolio_website: "https://john.doe.portfolio",
    github_URL: "https://github.com/johndoe",
    instagram_URL: "https://instagram.com/johndoe",
    linkedIn_URL: "https://linkedin.com/in/johndoe",
    facebook_URL: "https://facebook.com/johndoe",
    behance_URL: "https://behance.net/johndoe",
    dribble_URL: "https://dribbble.com/johndoe",
    youtube_URL: "https://youtube.com/johndoe",
    x_URL: "https://x.johndoe.com",
    drive_URL: "https://drive.google.com/john",
  },
  {
    iconURL: "/logo/Ellipse 2.svg",
    name: "Amaan",
    path: "/profile",
    position: "Lead",
    kiit_email_id: "john.doe@kiit.ac.in",
    personal_email_id: "john.doe@example.com",
    phone: 1234567890,
    current_year: 3,
    branch: "CSE",
    roll_number: 2023001,
    type: "lead",
    portfolio_website: "https://john.doe.portfolio",
    github_URL: "https://github.com/johndoe",
    instagram_URL: "https://instagram.com/johndoe",
    linkedIn_URL: "https://linkedin.com/in/johndoe",
    facebook_URL: "https://facebook.com/johndoe",
    behance_URL: "https://behance.net/johndoe",
    dribble_URL: "https://dribbble.com/johndoe",
    youtube_URL: "https://youtube.com/johndoe",
    x_URL: "https://x.johndoe.com",
    drive_URL: "https://drive.google.com/john",
  },
  {
    iconURL: "/logo/Ellipse 2.svg",
    name: "sachi",
    path: "/profile",
    position: "Lead",
    kiit_email_id: "john.doe@kiit.ac.in",
    personal_email_id: "john.doe@example.com",
    phone: 1234567890,
    current_year: 3,
    branch: "CSE",
    roll_number: 2023001,
    type: "lead",
    portfolio_website: "https://john.doe.portfolio",
    github_URL: "https://github.com/johndoe",
    instagram_URL: "https://instagram.com/johndoe",
    linkedIn_URL: "https://linkedin.com/in/johndoe",
    facebook_URL: "https://facebook.com/johndoe",
    behance_URL: "https://behance.net/johndoe",
    dribble_URL: "https://dribbble.com/johndoe",
    youtube_URL: "https://youtube.com/johndoe",
    x_URL: "https://x.johndoe.com",
    drive_URL: "https://drive.google.com/john",
  },
  {
    iconURL: "/logo/Ellipse 2.svg",
    name: "Harsh",
    path: "/profile",
    position: "Lead",
    kiit_email_id: "john.doe@kiit.ac.in",
    personal_email_id: "john.doe@example.com",
    phone: 1234567890,
    current_year: 3,
    branch: "CSE",
    roll_number: 2023001,
    type: "lead",
    portfolio_website: "https://john.doe.portfolio",
    github_URL: "https://github.com/johndoe",
    instagram_URL: "https://instagram.com/johndoe",
    linkedIn_URL: "https://linkedin.com/in/johndoe",
    facebook_URL: "https://facebook.com/johndoe",
    behance_URL: "https://behance.net/johndoe",
    dribble_URL: "https://dribbble.com/johndoe",
    youtube_URL: "https://youtube.com/johndoe",
    x_URL: "https://x.johndoe.com",
    drive_URL: "https://drive.google.com/john",
  },
  {
    iconURL: "/logo/Ellipse 2.svg",
    name: "Harshit",
    path: "/profile",
    position: "Lead",
    kiit_email_id: "john.doe@kiit.ac.in",
    personal_email_id: "john.doe@example.com",
    phone: 1234567890,
    current_year: 3,
    branch: "CSE",
    roll_number: 2023001,
    type: "lead",
    portfolio_website: "https://john.doe.portfolio",
    github_URL: "https://github.com/johndoe",
    instagram_URL: "https://instagram.com/johndoe",
    linkedIn_URL: "https://linkedin.com/in/johndoe",
    facebook_URL: "https://facebook.com/johndoe",
    behance_URL: "https://behance.net/johndoe",
    dribble_URL: "https://dribbble.com/johndoe",
    youtube_URL: "https://youtube.com/johndoe",
    x_URL: "https://x.johndoe.com",
    drive_URL: "https://drive.google.com/john",
  },
  {
    iconURL: "/logo/Ellipse 2.svg",
    name: "Amaan",
    path: "/profile",
    position: "Lead",
    kiit_email_id: "john.doe@kiit.ac.in",
    personal_email_id: "john.doe@example.com",
    phone: 1234567890,
    current_year: 3,
    branch: "CSE",
    roll_number: 2023001,
    type: "lead",
    portfolio_website: "https://john.doe.portfolio",
    github_URL: "https://github.com/johndoe",
    instagram_URL: "https://instagram.com/johndoe",
    linkedIn_URL: "https://linkedin.com/in/johndoe",
    facebook_URL: "https://facebook.com/johndoe",
    behance_URL: "https://behance.net/johndoe",
    dribble_URL: "https://dribbble.com/johndoe",
    youtube_URL: "https://youtube.com/johndoe",
    x_URL: "https://x.johndoe.com",
    drive_URL: "https://drive.google.com/john",
  },
];

export const SPONSORS: Sponsors[] = [
  {
    name: "RedBull",
    logo_URL: "/logo/Ellipse 2.svg",
    website_URL: "mlsakiit.com",
    description: "brvrage sponsored",
    signed_by: "Pranshu",
    phone: 7777777777,
    email: "john@com",
    sponsor_field: "education",
  },
  {
    name: "RedBull",
    logo_URL: "/logo/Ellipse 2.svg",
    website_URL: "mlsakiit.com",
    description: "brvrage sponsored",
    signed_by: "Pranshu",
    phone: 7777777779,
    email: "john@com",
    sponsor_field: "education",
  },
];

export const EVENTS: Events[] = [
  {
    name: "Kalki",
    location: "campus2",
    description: "web event",
    event_website_thumbnail: "/logo/Ellipse 2.svg",
    event_domain: "web", // Assuming a default value for event_domain
    attendees: 555,
    registrations: 666,
    script_link: "https://script.com/johndoe",
    drive_link: "https://drive.com/johndoe",
    time: "10:00 A.M",
    duration: 5,
    is_completed: true, // Use boolean value
    is_published: true, // Use boolean value
  },
];

export const MODAL: ModalItem[] = [
  {
    value: "member",
    topic: "Add a Member",
    description:
      "Add a new member or add members in batches by dragging in a csv file. Members can add details later on.",
  },
  {
    value: "event",
    topic: "Add an Event",
    description:
      "Add basic details for the new event or add by dragging in a csv file with all data.",
  },
  {
    value: "sponsor",
    topic: "Add a Sponsor",
    description:
      "Add details about the sponsor, upload the pdf for Memorandum of Understanding",
  },
];

// export const DROPDOWN_BUTTON: DropdownButtonItem[] = [
//   {
//     value: "member",
//     topic: "Add a Member",
//     description: "Add a new member or add members in batches by dragging in a csv file. Members can add details later on."
//   },
//   {
//     value: "event",
//     topic: "Add an Event",
//     description: "Add basic details for the new event or add by dragging in a csv file with all data."
//   },
//   {
//     value: "sponsor",
//     topic: "Add a Sponsor",
//     description: "Add details about the sponsor, upload the pdf for Memorandum of Understanding"
//   },
// ];

export const DOMAIN_DROPDOWN = [
  { id: "1", value: "web", label: "Web Development" },
  { id: "2", value: "app", label: "App Development" },
  { id: "3", value: "cloud", label: "Cloud Computing" },
  { id: "4", value: "cyber", label: "Cybersecurity" },
  { id: "5", value: "ml", label: "Machine Learning" },
  { id: "6", value: "video_editing", label: "Video Editing" },
  { id: "7", value: "graphics_designing", label: "Graphics Designing" },
  { id: "8", value: "content_writing", label: "Content Writing" },
  { id: "9", value: "corporate_relations", label: "Corporate Relations" },
  { id: "10", value: "public_relations", label: "Public Relations" },
  { id: "11", value: "creative", label: "Creative" },
  { id: "12", value: "design", label: "Design" },
  { id: "13", value: "ar_vr", label: "AR/VR" },
];

export const POSITION_DROPDWON: { id: number; value: string; label: string }[] =
  [
    { id: 1, value: "member", label: "Member" },
    { id: 2, value: "lead", label: "Lead" },
    { id: 3, value: "vice_lead", label: "Vice Lead" },
    { id: 4, value: "tech_lead", label: "Tech Lead" },
    { id: 5, value: "PR_lead", label: "PR Lead" },
    { id: 6, value: "CR_lead", label: "CR Lead" },
    { id: 7, value: "executive", label: "Executive" },
    { id: 8, value: "creative_lead", label: "Creative Lead" },
    { id: 9, value: "design_lead", label: "Design Lead" },
    { id: 10, value: "ar_lead", label: "AR Lead" },
    { id: 11, value: "vr_lead", label: "VR Lead" },
  ];

export const YEAR_DROPDOWN: { id: number; value: string; label: string }[] = [
  { id: 1, value: "1", label: "1st Year" },
  { id: 2, value: "2", label: "2nd Year" },
  { id: 3, value: "3", label: "3rd Year" },
  { id: 4, value: "4", label: "4th Year" },
  { id: 5, value: "5", label: "5th Year" },
];

export const BRANCH_DROPDOWN: { id: number; value: string; label: string }[] = [
  { id: 1, value: "CSE", label: "Computer Science" },
  { id: 2, value: "ECE", label: "Electronics" },
  { id: 3, value: "EEE", label: "Electrical" },
  { id: 4, value: "ME", label: "Mechanical" },
  { id: 5, value: "IT", label: "Information Technology" },
  { id: 6, value: "OTHERS", label: "Others" },
];
