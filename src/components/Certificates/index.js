import React from 'react';
import styled from 'styled-components';
import { Bio } from '../../data/constants';

const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.card_light};
  padding: 80px 0;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 12px;
  color: ${({ theme }) => theme.text_primary};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 4px;
    border-radius: 20px;
    background: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 12px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Section = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
  text-align: center;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  border: 1px solid rgba(255, 255, 255, 0.05);
  cursor: pointer;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    border: 1px solid ${({ theme }) => theme.primary + '50'};
  }
`;

const ItemTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 8px;
`;

const ItemDesc = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
`;

const ViewButton = styled.button`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  margin-top: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.primary + 'dd'};
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  width: 90%;
  max-width: 900px;
  height: 90vh;
  padding: 20px;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: ${({ theme }) => theme.card_light};
  color: ${({ theme }) => theme.text_primary};
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  
  &:hover {
    background: ${({ theme }) => theme.card_dark};
  }
`;

const CertificatesSection = () => {
  const [selectedCertificate, setSelectedCertificate] = React.useState(null);
  
  const PDFFrame = ({ src, title }) => (
    <iframe
      src={src}
      title={title}
      width="100%"
      height="500px"
      style={{ border: 'none' }}
    />
  );
  
  const certificates = [
    {
      title: "Build AI Apps with ChatGPT, Dall-E, and GPT-4",
      description: "Comprehensive course on building AI applications",
      pdfPath: "Build AI Apps with ChatGPT, Dall-E, and GPT-4.pdf"
    },
    {
      title: "C++",
      description: "C++ programming certification",
      pdfPath: "C++.pdf"
    },
    {
      title: "ChatGPT Advanced Data Analysis",
      description: "Advanced techniques for data analysis using ChatGPT",
      pdfPath: "ChatGPT Advanced Data Analysis.pdf"
    },
    {
      title: "ChatGPT Playground for Beginners",
      description: "Introduction to ChatGPT Playground",
      pdfPath: "ChatGPT Playground for Beginners.pdf"
    },
    {
      title: "ChatGPT for Beginners",
      description: "Fundamentals of using ChatGPT",
      pdfPath: "ChatGPT for Beginners.pdf"
    },
    {
      title: "Code with AI",
      description: "Certification in coding with AI assistance",
      pdfPath: "Code with AI.pdf"
    },
    {
      title: "Tools for Data Science",
      description: "Coursera certification for Data Science tools",
      pdfPath: "Coursera Tools for Data Science (Certificate).pdf"
    },
    {
      title: "DSA",
      description: "Data Structures and Algorithms certification",
      pdfPath: "DSA.pdf"
    },
    {
      title: "Data Methodology",
      description: "Certification in Data Methodology",
      pdfPath: "Data Methodology Certificate.pdf"
    },
    {
      title: "Dynamic Programming, Greedy Algorithms",
      description: "Advanced algorithms certification",
      pdfPath: "Dynamic Programming, Greedy Algorithms.pdf"
    },
    {
      title: "GFG DSA",
      description: "GeeksForGeeks Data Structures and Algorithms certification",
      pdfPath: "GFG DSA.pdf"
    },
    {
      title: "Gen AI with LLM",
      description: "Generative AI with Large Language Models",
      pdfPath: "Gen AI with LLM.pdf"
    },
    {
      title: "GenAI Primer",
      description: "Introduction to Generative AI",
      pdfPath: "GenAI Primer.pdf"
    },
    {
      title: "GenAI for Everyone (week-2)",
      description: "Week 2 certification for Generative AI course",
      pdfPath: "GenAI for Everyone (week-2).pdf"
    },
    {
      title: "Generative AI for everyone",
      description: "Complete Generative AI certification",
      pdfPath: "Generative AI for everyone.pdf"
    },
    {
      title: "Prompt Engineering for ChatGPT",
      description: "Advanced prompt engineering techniques",
      pdfPath: "Prompt Engineering for ChatGPT.pdf"
    },
    {
      title: "What is Data Science",
      description: "Introduction to Data Science concepts",
      pdfPath: "What is Data Science.pdf"
    }
  ];

  const achievements = [
    {
      title: "Selected for Sponsored Course",
      description: "Among 10 students chosen from 70 candidates for an exclusive sponsored course (January 2025)"
    },
    {
      title: "Led First-Ever Durga Puja Celebration",
      description: "Successfully organized Law Gate's first Durga Puja with a dedicated team"
    },
    {
      title: "NCO Zonal Rank",
      description: "Secured 18th rank at the zonal level in the National Cyber Olympiad (NCO) in class 10"
    }
  ];

  return (
    <Container id="certificates">
      <Wrapper>
        <Title>Certificates & Achievements</Title>
        <Desc>My professional certifications and notable accomplishments</Desc>
        
        <Section>
          <SectionTitle>Certificates</SectionTitle>
          <List>
            {certificates.map((cert, index) => (
              <ListItem key={index} onClick={() => setSelectedCertificate(cert)}>
                <ItemTitle>{cert.title}</ItemTitle>
                <ItemDesc>{cert.description}</ItemDesc>
                <ViewButton>View Certificate</ViewButton>
              </ListItem>
            ))}
          </List>
        </Section>
        
        {selectedCertificate && (
          <ModalOverlay onClick={() => setSelectedCertificate(null)}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={() => setSelectedCertificate(null)}>×</CloseButton>
              <PDFFrame 
                src={`/Certificates/${selectedCertificate.pdfPath}`} 
                title={selectedCertificate.title}
              />
            </ModalContent>
          </ModalOverlay>
        )}

        <Section>
          <SectionTitle>Achievements</SectionTitle>
          <List>
            {achievements.map((achievement, index) => (
              <ListItem key={index}>
                <ItemTitle>{achievement.title}</ItemTitle>
                <ItemDesc>{achievement.description}</ItemDesc>
              </ListItem>
            ))}
          </List>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default CertificatesSection;