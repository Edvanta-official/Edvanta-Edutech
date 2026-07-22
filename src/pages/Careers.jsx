import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import SectionTitle from '../components/common/SectionTitle';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

const CareersPage = () => {
  const jobs = [
    {
      title: 'Business Development Associate',
      dept: 'Sales & Growth',
      location: 'Hyderabad / Remote',
      type: 'Full-time',
      desc: 'Drive corporate partnerships, institutional relationships, and lead conversion strategy for Edvanta programs.'
    },
    {
      title: 'Data Extraction / Lead Generation',
      dept: 'Data & Operations',
      location: 'Hyderabad / Remote',
      type: 'Full-time',
      desc: 'Extract, verify, and organize high-quality student and hiring partner database pipelines using automated data tools.'
    },
    {
      title: 'Digital Marketing',
      dept: 'Marketing & Media',
      location: 'Hyderabad / Remote',
      type: 'Full-time',
      desc: 'Manage performance marketing, social media campaigns, SEO/SEM channels, and brand reach across educational communities.'
    },
    {
      title: 'Marketing Specialist',
      dept: 'Marketing & Strategy',
      location: 'Hyderabad / Remote',
      type: 'Full-time',
      desc: 'Formulate go-to-market campaigns, content strategies, and student engagement initiatives to elevate Edvanta brand awareness.'
    }
  ];

  return (
    <section style={{ padding: '60px 0' }}>
      <div className="container">
        <SectionTitle 
          subtitle="JOIN OUR TEAM" 
          title="We Are Hiring Active Builders"
          description="Help us restructure global computer science education. We are always looking for mentors, developers, and placement leaders."
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
          {jobs.map((job, idx) => (
            <Card key={idx} className="career-job-card glass-panel" style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '20px'
            }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '500px' }}>
                <span style={{
                  color: 'var(--accent)',
                  fontWeight: '700',
                  fontSize: '0.8rem',
                  textTransform: 'uppercase'
                }}>{job.dept}</span>
                
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800' }}>{job.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>{job.desc}</p>
                
                <div style={{ display: 'flex', gap: '16px', fontSize: '0.8rem', color: 'var(--text-tertiary)', marginTop: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={14} />
                    <span>{job.location}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={14} />
                    <span>{job.type}</span>
                  </div>
                </div>
              </div>

              <div>
                <Button variant="primary">Apply Now <ArrowRight size={16} /></Button>
              </div>

            </Card>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 600px) {
          .career-job-card {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .career-job-card button {
            width: 100% !important;
          }
        }
      `}} />
    </section>
  );
};

export default CareersPage;
