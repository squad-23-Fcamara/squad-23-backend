interface IMentoringSessionProps {
  schedule_to: Date;
  mentor_id: string;
  mentored_id: string;
  notes?: string;
  theme: string[];
  platform: string;
}

export { IMentoringSessionProps }