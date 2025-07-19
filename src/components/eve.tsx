import React, { useState, useEffect } from "react";

interface EveData {
  name: string;
  corporation_id: number;
  alliance_id?: number;
  security_status: number;
  description?: string;
  gender: string;
  race_id: number;
  birthday: string;
}

interface EveWidgetProps {
  characterId: number;
}

const EveWidget: React.FC<EveWidgetProps> = ({ characterId }) => {
  const [data, setData] = useState<EveData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://esi.evetech.net/latest/characters/${characterId}/?datasource=tranquility`,
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData: EveData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError((err as Error).message || "Failed to fetch character data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [characterId]); // Re-fetch if characterId changes

  if (loading) return <div>Loading character data...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No data available</div>;

  return (
    <div
      style={{
        position: "relative",
        padding: "16px",
        maxWidth: "400px",
        fontFamily: "Arial",
        margin: "0 auto",
        textAlign: "center",
        borderRadius: "8px",
      }}
    >
      <img
        src={`https://images.evetech.net/characters/${characterId}/portrait?size=256`}
        alt={data.name}
        style={{
          borderRadius: "50%",
          width: "256px",
          height: "256px",
          display: "block",
          margin: "0 auto 16px",
        }}
      />
      <h2>{data.name}</h2>
      <p>
        <strong>Corporation ID:</strong> {data.corporation_id} (Fetch name via
        another API call if needed)
      </p>
      <p>
        <strong>Alliance ID:</strong> {data.alliance_id || "None"}
      </p>
      <p>
        <strong>Security Status:</strong> {data.security_status.toFixed(2)}
      </p>
      <p>
        <strong>Description:</strong> {data.description || "No description"}
      </p>
      <p>
        <strong>Gender/Race:</strong> {data.gender} / Race ID {data.race_id}
      </p>
      <p>
        <strong>Birthday:</strong>{" "}
        {new Date(data.birthday).toLocaleDateString()}
      </p>
    </div>
  );
};

export default EveWidget;
