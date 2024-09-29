// components/global/CodeViewer.tsx
import { codeString } from '@/data/codeViewData';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { lightfair } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodeViewerProps {
  language: string;
  className?: string;
}

const CodeViewer: React.FC<CodeViewerProps> = ({ language, className }) => {
  return (
    <div
      className={`border border-[#F6F6F7] rounded-xl w-full ${
        className ? className : ''
      }`}>
      <div className='flex items-center  p-[10px] border-b border-[#F6F6F7]'>
        <span className='text-[8px] uppercase font-normal text-black tracking-widest'>
          Response
        </span>
        <div className='border gap-2 border-[#F6F6F7] font-medium rounded-md text-[9px] flex items-center ml-auto px-3 py-[7px]'>
          <circle className='circle bg-green-400 rounded-full p-[6px]'></circle>
          200 - Response
        </div>
      </div>
      <SyntaxHighlighter showLineNumbers language={language} style={lightfair}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeViewer;
