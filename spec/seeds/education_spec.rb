# frozen_string_literal: true

describe Seeds::Education do
    describe "#seed!" do
      subject { described_class.new.seed! }
  
      it "creates all regional processing offices" do
        expect { subject }.to_not raise_error
        expect(EduRegionalProcessingOffice.count).to eq(3)
      end
    end

end