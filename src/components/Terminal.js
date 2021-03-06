import React from 'react';
import ReactTerminal from '@anilredshift/react-bash';
import resumeData from './resume/resumeData';
import resumeMarkdown from './resume/resumeMarkdown';

const createUrlHandler = (url, target = '_blank') => ((state) => {
  window.open(url, target);
  return { ...state, history: state.history.concat([{ value: `Launching ${url}` }]) };
});

const history = [
  { cwd: '/', value: 'ls' },
  { value: 'contact projects resume Resume.md' },
];

const mailto = `mailto:${encodeURIComponent(resumeData.contact.email)}?subject=${encodeURIComponent('Contact request from homepage')}`;

const structure = {
  contact: { exec: createUrlHandler(mailto) },
  resume: { exec: createUrlHandler('/resume', '_self') },
  'Resume.md': { content: resumeMarkdown },
  projects: {
    'cogrammers-github': { exec: createUrlHandler('https://github.com/cogrammers/') },
    'evil-webserver': { exec: createUrlHandler('https://github.com/AnilRedshift/evil-webserver') },
    linkedINonymous: { exec: createUrlHandler('https://github.com/AnilRedshift/linkedINonymous') },
    'terminal.space': { exec: createUrlHandler('https://github.com/AnilRedshift/terminal.space') },
    yatlab: { exec: createUrlHandler('https://github.com/AnilRedshift/yatlab#yatlab') },
    wand: { exec: createUrlHandler('https://github.com/AnilRedshift/wand') },
  },
};

const Terminal = () => (
  <div>
    <ReactTerminal
      prefix="guest@terminal.space"
      history={history}
      structure={structure}
      styles={{
        ReactBash: {
          backgroundColor: '#000',
          height: '100vh',
          overflowY: 'scroll',
        },
        header: {
          display: 'none',
        },
        body: {
          margin: '20px',
          color: '#33FF00',
          backgroundColor: '#000',
          height: '100%',
        },
        prefix: {
          color: '#33FF00',
          marginRight: '5px',
        },
      }}
      theme="dark"
    />
  </div>
);

export default Terminal;
